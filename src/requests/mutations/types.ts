import { UseMutationWithFeedbackOptionsType } from "../../helpers/hooks/useMutationWithFeedback";

export type UseMutationOptionsType<T, K = void> = Omit<
  UseMutationWithFeedbackOptionsType<T, K>,
  "mutationFn"
>;
