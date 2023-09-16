import { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { TTitleProps } from "../../utils/types/TTitleProps";

const ButtonComponent: FC<TTitleProps> = ({ title }) => {
  return (
    <TouchableOpacity accessibilityLabel={title} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#690B0B",
    width: 266,
    height: 68,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "00000040",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Montserrat ExtraBold",
    fontSize: 24,
    textTransform: "uppercase",
  },
});

export default ButtonComponent;
