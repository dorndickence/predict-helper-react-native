import { StyleSheet, Text } from "react-native";
import { FC } from "react";
import { TTitleProps } from "../../utils/types/TTitleProps";

const SmallHeader: FC<TTitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontFamily: "Montserrat ExtraBold",
    fontSize: 14,
    letterSpacing: 1.05,
    textTransform: "capitalize",
  },
});

export default SmallHeader;
