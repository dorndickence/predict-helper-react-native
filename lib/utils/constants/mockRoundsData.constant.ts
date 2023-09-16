import { TRoundsStat } from "../types/TRoundsStat";
import uuid from "react-native-uuid";

export const mockRoundsDataConstant: TRoundsStat[] = [
  {
    indicator: "1,00",
    count: "4",
    color: "#690B0B",
    key: uuid.v4() as string,
  },
  {
    indicator: "1,01-1,49",
    count: "14",
    color: "#86A1FF",
    key: uuid.v4() as string,
  },
  {
    indicator: "1,50-1,99",
    count: "14",
    color: "#86A1FF",
    key: uuid.v4() as string,
  },
  {
    indicator: "2,00-4,99",
    count: "14",
    color: "#86A1FF",
    key: uuid.v4() as string,
  },
  {
    indicator: "5,00-9,99",
    count: "14",
    color: "#7751E3",
    key: uuid.v4() as string,
  },
  {
    indicator: "10,00-19,99",
    count: "14",
    color: "#7751E3",
    key: uuid.v4() as string,
  },
  {
    indicator: "20,00-99,99",
    count: "14",
    color: "#7751E3",
    key: uuid.v4() as string,
  },
  {
    indicator: "100+",
    count: "14",
    color: "#3805C9",
    key: uuid.v4() as string,
  },
];
