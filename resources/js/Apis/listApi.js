import { axiosClient } from "../services/Axios.Service";

const getListApi = async (data) => {
  console.log("payload in api", data);
  const request = {
    url: `v1/api/conference/`,
    method: "get",
  };
  const response = await axiosClient(request);
  console.log("response in api ", response);
  return response;
};





export { getListApi };
