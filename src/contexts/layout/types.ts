export type LoadingType = "wholePage" | "floating";

export type LoadingContextType = {
  isLoading: boolean;
  type: LoadingType | null;
  showLoader(type?: LoadingType): void;
  hideLoader(): void;
};
