export type TGamesStatisticsData = {
  data: {
    Error: number;
    Message: string;
    Data: {
      index: number;
      lastRoundData: {
        coefficient: string;
        date: string;
      };
      roundsQty: number;
      statisticsData: Record<
        | "1.00"
        | "1.01-1.49"
        | "1.5-1.99"
        | "2.00-4.99"
        | "5.00-9.99"
        | "10.00-19.99"
        | "20.00-99.99"
        | "100+",
        {
          count: number;
          color: string;
        }
      >;
    };
  };
};
