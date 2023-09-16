import PageWrapper from "../../lib/components/UI/PageWrapper";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../../lib/components/UI/Footer";
import SmallHeader from "../../lib/components/UI/SmallHeader";
import CommonTypography from "../../lib/components/UI/CommonTypography";
import { A } from "@expo/html-elements";
import ButtonComponent from "../../lib/components/UI/ButtonComponent";

const AboutApp = () => {
  return (
    <PageWrapper>
      <View style={styles.contentContainer}>
        <View style={styles.blockContainer}>
          <SmallHeader title="about application" />
          <View style={styles.textContainer}>
            <CommonTypography>
              We really like playing Aviator because unlike regular casino
              games, there's a lot more depending on the player. If you approach
              things wisely, you can be successful. That's why we decided to
              create this app, it helps players to evaluate the past rounds and
              adjust their strategy for the future game.
            </CommonTypography>
            <CommonTypography>
              Evaluate how the game developed earlier to guess whether it is
              worth to start playing now, or it is better to wait for a better
              moment.
            </CommonTypography>
            <CommonTypography>
              To&nbsp;play Aviator, you need to&nbsp;register on&nbsp;
              <Text style={styles.markerSpan}>the site and start playing</Text>
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
    flex: 1,
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

export default AboutApp;
