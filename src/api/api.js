import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/",
});

export const MainAPI = {
  articles() {
    return instance.get(`/articles`).then((response) => response.data);
  },
  paramsById(id) {
    return instance.get(`/articles/${id}`).then((response) => response.data);
  },
};
