import axios from "axios";

export default function fetchRequest(url, method, body) {
  const accessToken = localStorage.getItem("accessToken");
  return axios({
    url,
    method,
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(function (res) {
      return res.data;
    })
    .catch(function (errors) {
      console.log(errors);
      return errors;
    });
}
