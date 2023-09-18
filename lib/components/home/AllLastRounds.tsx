import { StyleSheet, View } from "react-native";
import LargeHeader from "../UI/LargeHeader";
import RoundsStatBadge from "../UI/RoundsStatBadge";
import { A } from "@expo/html-elements";
import ButtonComponent from "../UI/ButtonComponent";
import { TGamesStatisticsData } from "../../utils/types/TStatisticsData";
import { FC } from "react";

type Props = Pick<
  TGamesStatisticsData["data"]["Data"],
  "roundsQty" | "statisticsData"
>;

const AllLastRounds: FC<Props> = ({ roundsQty, statisticsData }) => {
  return (
    <View style={styles.container}>
      <LargeHeader title={`last ${roundsQty} rounds`} />
      <View style={styles.badgesContainer}>
        {statisticsData &&
          Object.keys(statisticsData)?.map((key) => (
            <RoundsStatBadge
              color={statisticsData[key].color}
              count={statisticsData[key].count}
              indicator={key}
              key={key}
            />
          ))}
      </View>
      <A
        href="https://games.arkana-gaming.com/games/crash"
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
  badgesContainer: {
    marginTop: 38,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: 17,
    rowGap: 22,
    justifyContent: "center",
  },
  linkButtonWrapper: {
    marginTop: 70,
  },
});

export default AllLastRounds;
