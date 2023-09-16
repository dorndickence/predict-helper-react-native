import { StyleSheet, View } from "react-native";
import LargeHeader from "../UI/LargeHeader";
import { mockRoundsDataConstant } from "../../utils/constants/mockRoundsData.constant";
import RoundsStatBadge from "../UI/RoundsStatBadge";
import { A } from "@expo/html-elements";
import ButtonComponent from "../UI/ButtonComponent";

const AllLastRounds = () => {
  return (
    <View style={styles.container}>
      <LargeHeader title="last 100 rounds" />
      <View style={styles.badgesContainer}>
        {mockRoundsDataConstant.map((item) => (
          <RoundsStatBadge item={item} key={item.key} />
        ))}
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
