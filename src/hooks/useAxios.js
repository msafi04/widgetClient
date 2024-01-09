import { useState, useEffect } from "react";

import { publicAxios } from "../app/api/client";

// axiosParams = {
    // method: 'GET',
    // url: endpoint,
    // headers: {},
    // data: {}
// }

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async (params) => {
    try {
        const result = await publicAxios.request(params)
        setResponse(result.data)
    } catch (err) {
        setError(err)
    } finally {
        setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchApi(axiosParams);
  }, []);

  return { response, error, isLoading };
};

export default useAxios;
