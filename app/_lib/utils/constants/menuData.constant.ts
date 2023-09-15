import { TItemData } from "../types/TItemData";
import uuid from "react-native-uuid";
import { ERoutes } from "../../routes/ERoutes";

const menuDataConstant: TItemData[] = [
  {
    id: uuid.v4() as string,
    title: "Home",
    route: ERoutes.HOME,
  },
  {
    id: uuid.v4() as string,
    title: "About aviator",
    route: ERoutes.ABOUT_GAME,
  },
  {
    id: uuid.v4() as string,
    title: "About app",
    route: ERoutes.ABOUT_APP,
  },
];

export { menuDataConstant };
