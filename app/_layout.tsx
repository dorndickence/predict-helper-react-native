import { Drawer } from "expo-router/drawer";
import Header from "../lib/components/drawer/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerContent from "../lib/components/drawer/DrawerContent";
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "Montserrat ExtraBold": require("../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf"),
          "Montserrat Light": require("../assets/fonts/Montserrat/static/Montserrat-Light.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return appIsReady ? (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Drawer
        screenOptions={{
          header: Header,
          drawerActiveTintColor: "#FFF",
          drawerActiveBackgroundColor: "#2C1C1C",
          drawerInactiveTintColor: "#FFF",
          drawerHideStatusBarOnOpen: true,
          overlayColor: "transparent",
          drawerStyle: {
            width: Dimensions.get("window").width - 100,
          },
        }}
        drawerContent={DrawerContent}
      />
    </SafeAreaProvider>
  ) : null;
};

export default Layout;
