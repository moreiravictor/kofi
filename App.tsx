
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native"
import MainStack from "./src/stacks/main-stack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
