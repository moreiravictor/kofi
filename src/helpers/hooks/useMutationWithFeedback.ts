import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { useLoading } from "../../contexts/layout/hook";
import { LoadingType } from "../../contexts/layout/types";

export interface UseMutationWithFeedbackOptionsType<T, K = void>
  extends UseMutationOptions<T, Error, K, unknown> {
  errorSetup?: { message: string; displayError?: boolean };
  successMessage?: string;
  pageLoader?: LoadingType;
}

const useMutationWithFeedback = <T, K>({
  successMessage,
  errorSetup,
  pageLoader,
  onError,
  onMutate,
  onSettled,
  onSuccess,
  ...options
}: UseMutationWithFeedbackOptionsType<T, K>) => {
  const loader = useLoading();

  return useMutation({
    ...options,
    onMutate: (...args) => {
      if (pageLoader) {
        loader.showLoader(pageLoader);
      }

      if (onMutate) {
        onMutate(...args);
      }
    },
    onSuccess: (...args) => {
      if (onSuccess) {
        onSuccess(...args);
      }

      if (pageLoader) {
        loader.hideLoader();
      }

      if (successMessage) {
        Toast.show({
          text1: successMessage,
          type: "success",
          position: "bottom",
        });
      }
    },
    onError: (...args) => {
      if (onError) {
        onError(...args);
      }

      if (pageLoader) {
        loader.hideLoader();
      }

      if (errorSetup) {
        Toast.show({
          text1: `${errorSetup.message}${args[0].message}`,
          type: "error",
          position: "bottom",
        });
      }
    },
    onSettled: (...args) => {
      if (onSettled) {
        onSettled(...args);
      }

      if (pageLoader) {
        loader.hideLoader();
      }
    },
  });
};

export default useMutationWithFeedback;
