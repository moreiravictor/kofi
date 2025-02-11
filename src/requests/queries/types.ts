import { UseQueryWithFeedbackOptionsType } from "../../helpers/hooks/useQueryWithFeedback";

export interface UseQueryOptionsType<T>
  extends Omit<UseQueryWithFeedbackOptionsType<T>, "queryKey" | "queryFn"> {}
