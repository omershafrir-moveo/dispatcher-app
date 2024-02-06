import axios from "axios";
const API_KEY = "c327b4ab8a894cc6a620e67491dd2224";

export const getArticles = async (options?: {}) => {
  const res = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=c327b4ab8a894cc6a620e67491dd2224"
  );
  return res.data;
};

