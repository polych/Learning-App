import axios from "axios";
const getHttpHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
const getConfig = () => ({ headers: getHttpHeaders() });
const baseUrl = `146.59.151.245/api/v1`;
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
  static getVideoLanguages({ id, language }) {
    return axios.get(`${baseUrl}/get-subtitles/${id}/${language}`, getConfig());
  }
  static getSubtitles({ id, from, to }) {
    return axios.get(
      `${baseUrl}/get-subtitles/${id}/${from}/${to}`,
      getConfig()
    );
  }
  static textTranslate({ text, from, to }) {
    console.log(text, from, to);
    return axios.get(`${baseUrl}/trans/${text}/${from}/${to}`, getConfig());
  }
  static getLanguages() {
    return axios.get(`${baseUrl}/get-langs`, getConfig());
  }
}
export default API;
