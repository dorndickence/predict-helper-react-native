import PageWrapper from "../_lib/components/UI/PageWrapper";
import { ScrollView, StyleSheet, View } from "react-native";
import IndexBlock from "../_lib/components/home/IndexBlock";
import LastRoundBlock from "../_lib/components/home/LastRoundBlock";
import Footer from "../_lib/components/UI/Footer";
import AllLastRounds from "../_lib/components/home/AllLastRounds";

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
