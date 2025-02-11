import { UseMutationWithFeedbackOptionsType } from "../../helpers/hooks/useMutationWithFeedback";

export interface UseMutationOptionsType<T, K = void>
  extends Omit<UseMutationWithFeedbackOptionsType<T, K>, "mutationFn"> {}
