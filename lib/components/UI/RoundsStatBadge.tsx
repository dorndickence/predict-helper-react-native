import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TGamesStatisticsData } from "../../utils/types/TStatisticsData";

type Props = TGamesStatisticsData["data"]["Data"]["statisticsData"]["100+"] & {
  indicator: string;
};

const RoundsStatBadge: FC<Props> = ({ count, color, indicator }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, color }}>{indicator}</Text>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    rowGap: 5,
    width: 81,
  },
  title: {
    fontFamily: "Montserrat ExtraBold",
    fontSize: 13,
  },
  countContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#1C1C1C",
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "00000040",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  countText: {
    fontFamily: "Montserrat ExtraBold",
    color: "white",
    fontSize: 26,
  },
});

export default RoundsStatBadge;
