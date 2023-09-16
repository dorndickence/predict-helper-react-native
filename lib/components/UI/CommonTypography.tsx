import { StyleSheet, Text } from "react-native";
import { FC, PropsWithChildren } from "react";

const CommonTypography: FC<PropsWithChildren> = ({ children }) => {
  return <Text style={styles.typography}>{children}</Text>;
};

const styles = StyleSheet.create({
  typography: {
    color: "white",
    fontFamily: "Montserrat Light",
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 20,
  },
});

export default CommonTypography;
