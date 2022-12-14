import axios from 'axios'

const endPoints = {
  test: "https://60b2643d62ab150017ae21de.mockapi.io/",
  prod: "https://prod.myapi.io/",
  staging: "https://staging.myapi.io"
}

const instance = axios.create({
  baseURL: endPoints.test,
  timeout: 30000,
  headers: { Authorization: "Bear mytoken" }
});

instance.interceptors.response.use(
  (res: object) => {
    return res;
  },
  (err: object) => {
    if (err.response.status === 403) { };
    return Promise.reject(err);
  }
)

export default instance;
