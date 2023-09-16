import { Image, StyleSheet, Text, View } from "react-native";
import { A } from "@expo/html-elements";
import ButtonComponent from "../UI/ButtonComponent";
import LargeHeader from "../UI/LargeHeader";

const IndexBlock = () => {
  return (
    <View style={styles.container}>
      <LargeHeader title="play or not index" />
      <View style={styles.diagramContainer}>
        <Image
          resizeMode="contain"
          style={styles.diagramImage}
          source={require("../../../assets/images/indicator.png")}
        />
        <View style={styles.arrowImageContainer}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/arrow.png")}
            style={styles.arrowImage}
          />
        </View>
      </View>
      <A
        href="https://games.arkana-gaming.com/"
        style={styles.linkButtonWrapper}
      >
        <ButtonComponent title="play now" />
      </A>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },

  diagramContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
    height: 160,
  },
  diagramImage: {
    width: 310,
    height: 160,
  },
  arrowImageContainer: {
    height: 210,
    width: 19,
    position: "relative",
    bottom: 115,
    transform: "rotate(75deg)",
  },
  arrowImage: {
    maxHeight: 115,
    width: "100%",
  },
  linkButtonWrapper: {
    marginTop: 65,
  },
});

export default IndexBlock;
