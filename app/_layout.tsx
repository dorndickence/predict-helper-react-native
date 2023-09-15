import { Drawer } from "expo-router/drawer";
import Header from "./_lib/components/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerContent from "./_lib/components/DrawerContent";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SplashScreen } from "expo-router";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Drawer
        screenOptions={{
          header: Header,
          drawerActiveTintColor: "#FFF",
          drawerActiveBackgroundColor: "#2C1C1C",
          drawerInactiveTintColor: "#FFF",
        }}
        drawerContent={DrawerContent}
      />
    </SafeAreaProvider>
  );
};

export default Layout;
