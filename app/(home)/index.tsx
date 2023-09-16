import PageWrapper from "../../lib/components/UI/PageWrapper";
import { ScrollView, StyleSheet, View } from "react-native";
import IndexBlock from "../../lib/components/home/IndexBlock";
import LastRoundBlock from "../../lib/components/home/LastRoundBlock";
import Footer from "../../lib/components/UI/Footer";
import AllLastRounds from "../../lib/components/home/AllLastRounds";

const Home = () => {
  return (
    <PageWrapper>
      <ScrollView>
        <View style={styles.container}>
          <IndexBlock />
          <LastRoundBlock />
          <AllLastRounds />
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
