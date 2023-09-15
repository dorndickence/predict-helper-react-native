import { FC } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  title: string;
};

const LargeHeader: FC<Props> = ({ title }) => {
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
