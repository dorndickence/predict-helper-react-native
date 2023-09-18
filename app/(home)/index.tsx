import PageWrapper from "../../lib/components/UI/PageWrapper";
import { ScrollView, StyleSheet, View } from "react-native";
import IndexBlock from "../../lib/components/home/IndexBlock";
import LastRoundBlock from "../../lib/components/home/LastRoundBlock";
import Footer from "../../lib/components/UI/Footer";
import AllLastRounds from "../../lib/components/home/AllLastRounds";
import { useEffect, useState } from "react";
import { TGamesStatisticsData } from "../../lib/utils/types/TStatisticsData";
import axios from "axios";

const Home = () => {
  const [roundsData, setRoundsData] = useState<
    TGamesStatisticsData["data"]["Data"] | null
  >(null);

  useEffect(() => {
    axios
      .get<undefined, TGamesStatisticsData>(
        "http://192.168.0.102:8010/crash_game/get_games_statistics",
      )
      .then(({ data }) => setRoundsData(data.Data))
      .catch(console.error);
  }, []);

  return (
    <PageWrapper>
      <ScrollView>
        <View style={styles.container}>
          <IndexBlock index={roundsData?.index} />
          <LastRoundBlock
            coefficient={roundsData?.lastRoundData?.coefficient}
            date={roundsData?.lastRoundData?.date}
          />
          <AllLastRounds
            roundsQty={roundsData?.roundsQty}
            statisticsData={roundsData?.statisticsData}
          />
        </View>
        <Footer />
      </ScrollView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
    rowGap: 80,
  },
});

export default Home;
