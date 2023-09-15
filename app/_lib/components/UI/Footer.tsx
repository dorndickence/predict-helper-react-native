import { Dimensions, Image, StyleSheet, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../../../assets/images/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingTop: 35,
    paddingBottom: 60,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    marginTop: 90,
  },
  logo: {
    width: 260,
    height: 76,
  },
});

export default Footer;
