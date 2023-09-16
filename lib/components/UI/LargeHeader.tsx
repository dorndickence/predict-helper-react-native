import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { TTitleProps } from "../../utils/types/TTitleProps";

const LargeHeader: FC<TTitleProps> = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    color: "#FFF",
    fontFamily: "Montserrat ExtraBold",
    fontSize: 24,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default LargeHeader;
