import { useState, useEffect } from "react";

import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

function useFetch<DataType>(parameter: string) {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError("");
    apiClient
      .get<DataType>("/forecast", {
        params: { q: parameter },
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [parameter]);

  return { data, loading, error };
}

export default useFetch;
