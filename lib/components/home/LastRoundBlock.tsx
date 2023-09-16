import { StyleSheet, View, Text } from "react-native";
import LargeHeader from "../UI/LargeHeader";

const LastRoundBlock = () => {
  return (
    <View style={styles.container}>
      <LargeHeader title="last round" />
      <Text style={styles.dateText}>11.09.23 17:05</Text>
      <View style={styles.lastRoundCoeffBadge}>
        <Text style={styles.lastCoeffText}>1,88</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  dateText: {
    color: "#818181",
    fontFamily: "Montserrat Light",
    fontSize: 14,
    letterSpacing: 1,
    marginTop: 5,
  },
  lastRoundCoeffBadge: {
    width: 160,
    height: 100,
    borderRadius: 6,
    backgroundColor: "#1C1C1C",
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "00000040",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
  },
  lastCoeffText: {
    color: "#FFF",
    fontFamily: "Montserrat ExtraBold",
    fontSize: 48,
  },
});

export default LastRoundBlock;
