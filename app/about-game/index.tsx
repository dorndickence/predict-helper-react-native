import PageWrapper from "../../lib/components/UI/PageWrapper";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../../lib/components/UI/Footer";
import SmallHeader from "../../lib/components/UI/SmallHeader";
import CommonTypography from "../../lib/components/UI/CommonTypography";
import ButtonComponent from "../../lib/components/UI/ButtonComponent";
import { A } from "@expo/html-elements";

const AboutGame = () => {
  return (
    <PageWrapper>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.blockContainer}>
            <SmallHeader title="about aviator" />
            <View style={styles.textContainer}>
              <CommonTypography>
                The game Aviator is&nbsp;developed by&nbsp;Spribe.
              </CommonTypography>
              <CommonTypography>
                Aviator is&nbsp;a&nbsp;new kind of&nbsp;social multiplayer game
                consisting of&nbsp;an&nbsp;increasing curve that can crash
                anytime. When round starts, a&nbsp;scale of&nbsp;multiplier
                starts growing. Player must cash out before lucky plane flies
                away.
              </CommonTypography>
              <CommonTypography>
                Originated from video gaming industry, this format became
                popular in&nbsp;crypto casinos, due to&nbsp;its simplicity and
                exciting gambling experience.
              </CommonTypography>
              <CommonTypography>
                We&nbsp;are amongst pioneers to&nbsp;introduce this game
                to&nbsp;regular online casinos.
              </CommonTypography>
            </View>
          </View>
          <View style={styles.blockContainer}>
            <SmallHeader title="engaging & social" />
            <View style={styles.textContainer}>
              <CommonTypography>
                In-game chat is&nbsp;a&nbsp;great tool for creating game
                community with loyal players.
              </CommonTypography>
              <CommonTypography>
                Its also new layer of&nbsp;communication and marketing medium
                for casino.
              </CommonTypography>
              <CommonTypography>
                Everyone can see how much other players are betting and winning.
              </CommonTypography>
              <CommonTypography>
                In-game statistics module with biggest and hugest wins presented
                as&nbsp;daily, monthy or&nbsp;all time leaderboard.
              </CommonTypography>
            </View>
          </View>
          <View style={styles.blockContainer}>
            <SmallHeader title="how to play" />
            <View style={styles.textContainer}>
              <CommonTypography>
                To&nbsp;play Aviator, you need to&nbsp;register on&nbsp;
                <Text style={styles.markerSpan}>
                  the site and start playing
                </Text>
              </CommonTypography>
            </View>
          </View>
          <A
            href="https://games.arkana-gaming.com/games/crash"
            style={styles.linkButtonWrapper}
          >
            <ButtonComponent title="play now" />
          </A>
        </View>
        <Footer />
      </ScrollView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    rowGap: 35,
  },
  blockContainer: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    rowGap: 20,
  },
  textContainer: {
    rowGap: 12,
  },
  markerSpan: {
    color: "#E6043B",
    fontFamily: "Montserrat ExtraBold",
  },
  linkButtonWrapper: {
    marginTop: 35,
  },
});

export default AboutGame;
