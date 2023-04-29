import axios from "axios";

const restClient = (method, endPoint, params, data) =>
  axios({
    method,
    url: `http://localhost:4444/api/${endPoint}`,
    data,
    params,
  })
    .then((res) => res)
    .catch((err) => err);

export default restClient;
