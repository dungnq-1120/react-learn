import axios from "axios";

const axiosIns = axios.create({
  baseURL: "http://localhost:4444/api",
});

interface IRestClient {
  url: string;
  params?: any;
  method?: "get" | "post" | "patch" | "put" | "delete";
  data?: any
}

const restClient = <T>(config: IRestClient) =>
  axiosIns({
    ...config,
  })
    .then((res) => res.data as T)
    .catch((err) => {
      alert(err);
    });

export default restClient;
