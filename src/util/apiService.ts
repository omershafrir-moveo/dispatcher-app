import axios from "axios";
import { SelectOptionType } from "../global-data";
const API_KEY = "c327b4ab8a894cc6a620e67491dd2224";

export type queryEntry = {
  [param: string]: string;
};
export type searchParams = {
  searchMode: string;
  queries: queryEntry[];
};

export const getArticles = async (params?: searchParams) => {
  console.log(`'params' value is: ,${JSON.stringify(params?.queries)}`);

  // const queriesSuffix = params?.queries.map((qu:queryEntry) => );
  // console.log("QQq", JSON.stringify(queriesSuffix));

  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=c327b4ab8a894cc6a620e67491dd2224`
  );
  // const res = await axios.get(
  //   `https://newsapi.org/v2/${params?.searchMode}&apiKey=${API_KEY}`
  // );
  return res.data;
};
// export const getArticles = async (params?: searchParams) => {
//   const res = await axios.get(
//     `https://newsapi.org/v2/${params?.searchMode}?country=us&apiKey=c327b4ab8a894cc6a620e67491dd2224`
//   );
//   return res.data;
// };
