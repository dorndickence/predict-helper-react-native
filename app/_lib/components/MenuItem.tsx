import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { TItemData } from "../utils/types/TItemData";
import { ListRenderItem, Pressable, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

type Props = {
  navigation: DrawerNavigationHelpers;
  selectedId: string | null;
};

const MenuItem: ListRenderItem<TItemData> = ({
  item: { title, id, route },
}) => {
  return (
    <Link href={route} style={styles.link}>
      <Text style={styles.linkText}>{title}</Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
    textTransform: "uppercase",
    fontFamily: "Montserrat",
  },
  link: {
    marginBottom: 21,
  },
});

export default MenuItem;
