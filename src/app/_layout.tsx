import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Loader from "@/src/components/Loading";
import { KofiToast } from "@/src/components/Toast";
import { LoadingContextProvider } from "@/src/contexts/layout/layoutContext";
import {
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Platform } from "react-native";
import { SheetProvider } from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  configureFonts,
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";
import "../sheets";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const fontConfig = {
    default: {
      fontFamily: Platform.select({
        web: "Montserrat_300Light",
        ios: "Montserrat_300Light",
        android: "Montserrat_300Light",
        default: "Montserrat_300Light",
      }),
      fontWeight: "300" as const,
      letterSpacing: 0.5,
      lineHeight: 22,
      fontSize: 20,
    },
  };

  const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
  };

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SheetProvider>
        <PaperProvider theme={theme}>
          <LoadingContextProvider>
            <QueryClientProvider client={queryClient}>
              <Stack screenOptions={{ animation: "slide_from_right" }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
              <KofiToast />
              <Loader />
            </QueryClientProvider>
          </LoadingContextProvider>
        </PaperProvider>
      </SheetProvider>
    </GestureHandlerRootView>
  );
}
