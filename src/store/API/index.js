import axios from "axios";
const getHttpHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
const getConfig = () => ({ headers: getHttpHeaders() });
const baseUrl = `http://cq29081-django.tw1.ru/api/v1`;

class API {
  static search(query) {
    return axios.get(`${baseUrl}/search-by-name/${query}`, getConfig());
  }
  static searchPagination(query, page) {
    return axios.get(
      `${baseUrl}/search-by-name/${query}?page=${page}`,
      getConfig()
    );
  }
  static getSubtitles(id) {
    return axios.get(`${baseUrl}/get-subtitles/${id}`, {
      "Content-Type": "application/xml; charset=utf-8",
    });
  }
}
export default API;
