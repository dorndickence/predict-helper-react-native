import { FC, PropsWithChildren } from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../../../assets/images/bg.png")}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: -74,
    height: Dimensions.get("window").height,
    width: "100%",
    paddingTop: 74,
    display: "flex",
  },
});

export default PageWrapper;
