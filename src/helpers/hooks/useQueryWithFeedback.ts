import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useLoading } from "../../contexts/layout/hook";
import { LoadingType } from "../../contexts/layout/types";

export interface UseQueryWithFeedbackOptionsType<T>
  extends UndefinedInitialDataOptions<
    T,
    Error,
    T,
    (string | Record<string, string>)[]
  > {
  errorSetup?: { message: string; displayError?: boolean };
  successMessage?: string;
  pageLoader?: LoadingType;
}

const useQueryWithFeedback = <T>({
  successMessage,
  errorSetup,
  pageLoader,
  ...options
}: UseQueryWithFeedbackOptionsType<T>) => {
  const loader = useLoading();

  const {
    isLoading,
    isSuccess,
    isError,
    error,
    isRefetching,
    isFetching,
    ...query
  } = useQuery(options);

  useEffect(() => {
    if (!pageLoader) {
      return;
    }

    if (isLoading || isRefetching || isFetching) {
      loader.showLoader(pageLoader);
    } else {
      loader.hideLoader();
    }
  }, [isLoading, isFetching, isRefetching, pageLoader, loader]);

  useEffect(() => {
    if (isSuccess && successMessage) {
      Toast.show({
        text1: successMessage,
        type: "success",
        position: "bottom",
      });
    }
  }, [isSuccess, successMessage]);

  useEffect(() => {
    if (isError && errorSetup) {
      Toast.show({
        text1: `${errorSetup.message}${error.message}`,
        type: "error",
        position: "bottom",
      });
    }
  }, [isError, error]);

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    isRefetching,
    isFetching,
    ...query,
  };
};

export default useQueryWithFeedback;
