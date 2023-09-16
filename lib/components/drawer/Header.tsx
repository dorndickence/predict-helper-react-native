import { Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { DrawerHeaderProps } from "@react-navigation/drawer";

const Header: FC<DrawerHeaderProps> = ({ navigation }) => {
  const handleOpenDrawer = () => navigation.openDrawer();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable onPress={handleOpenDrawer} style={styles.menuButton}>
          <Ionicons name="menu" size={50} color="#E10334" />
        </Pressable>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/images/logo.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    display: "flex",
    flexDirection: "row",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    right: 25,
  },
  logo: {
    width: 144,
    height: 49,
  },
  menuButton: {
    zIndex: 1,
  },
});

export default Header;
