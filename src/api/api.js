import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/",
});

export const MainAPI = {
  articles(query) {
    let params = query ? { _q: query, _sort: "publishedAt" } : {};
    return instance
      .get(`/articles`, { params: params })
      .then((response) => response.data);
  },
  paramsById(id) {
    return instance.get(`/articles/${id}`).then((response) => response.data);
  },
};
