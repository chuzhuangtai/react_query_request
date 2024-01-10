import axios from "axios";
import JsCookie from "js-cookie";

export const customRequest = (props) => {
  const { headers } = props || {};
  const http = axios.create({
    baseURL: "/api/admin",
    timeout: 600 * 1000,
  });

  const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
  };

  http.interceptors.request.use(async (config) => {
    config.headers = {
      ...(headers ?? DEFAULT_HEADERS),
      ...config.headers,
      Authorization: JsCookie.get("adminToken"),
    };

    return config;
  });

  http.interceptors.response.use(
    (response) => {
      if (response.status === 200 && response.data.success) {
        return response?.data?.data || {};
      } else {
        return response?.data;
      }
    },
    (err) => {
      return err?.response;
    }
  );
  return http;
};

const http = customRequest();
export const formRequest = customRequest({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // customAxiosResponse: (response) => response?.data?.data,
});
export default http;
