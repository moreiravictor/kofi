import assets from "@/src/assets";
import { Image } from "expo-image";

export function LightBar() {
  return (
    <Image
      source={assets.lightBar}
      style={{ flex: 1, height: 1.5, marginTop: 5 }}
    ></Image>
  );
}
