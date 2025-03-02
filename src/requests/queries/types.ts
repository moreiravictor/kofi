import { UseQueryWithFeedbackOptionsType } from "../../helpers/hooks/useQueryWithFeedback";

export type UseQueryOptionsType<T> = Omit<
  UseQueryWithFeedbackOptionsType<T>,
  "queryKey" | "queryFn"
>;
