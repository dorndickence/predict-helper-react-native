import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FC, useState } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { menuDataConstant } from "../../utils/constants/menuData.constant";
import MenuItem from "./MenuItem";

const DrawerContent: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleCloseDrawer = () => navigation.closeDrawer();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.closeButtonContainer}>
          <Pressable onPress={handleCloseDrawer}>
            <FontAwesome name="close" size={24} color="#E10334" />
          </Pressable>
        </View>
        <FlatList
          data={menuDataConstant}
          renderItem={MenuItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.96)",
  },
  container: {
    paddingTop: 15,
    paddingRight: 17,
    paddingLeft: 48,
    rowGap: 30,
  },
  closeButtonContainer: {
    alignItems: "flex-end",
  },
});

export default DrawerContent;
