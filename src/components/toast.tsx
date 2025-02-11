import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from "react-native-toast-message";
import { JSX } from "react/jsx-runtime";

export const KofiToast = () => {
  const toastConfig = {
    success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: "#4CAF50", // Green border
          backgroundColor: "#E8F5E9", // Light green background
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#2E7D32",
        }}
        text2Style={{
          fontSize: 14,
          color: "#4CAF50",
        }}
      />
    ),

    error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: "#D32F2F", // Red border
          backgroundColor: "#FFEBEE", // Light red background
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#B71C1C",
        }}
        text2Style={{
          fontSize: 14,
          color: "#D32F2F",
        }}
      />
    ),
  };

  return <Toast config={toastConfig} />;
};
