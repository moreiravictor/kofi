import { useLoading } from "@/src/contexts/layout/hook";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  const { isLoading, type } = useLoading();

  if (!isLoading || type !== "floating") return null;

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 9999,
        backgroundColor: "hsla(0, 0.00%, 100.00%, 0.29)",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator animating={true} color={"#fff"} size={60} />
    </View>
  );
};

export default Loader;
