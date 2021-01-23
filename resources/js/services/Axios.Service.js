
import Axios from "axios";
export const axiosClient = async (request) => {
  const BASE_URL = "https://conferencemaker.herokuapp.com/";
  const { url: URL, method, data, headers } = request;
  const url =BASE_URL + URL;
  console.log("in axios api", url, method, data);
  const res = await Axios({
    method,
    headers: {
      // Authorization: "Bearer " + localStorage.getItem("token"),
    },
    url,
    data,
  })
    .then((res) => {
      console.log('Response from api', res)
      return res;
    })
    .catch((error) => {
      console.log("err from api", error.response);
      return error.response;
    });
  return res;
};


