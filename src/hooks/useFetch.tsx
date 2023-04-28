import { useState, useEffect } from "react";
import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function useFetch<DataType>(parameter: string) {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${parameter}&appid=${WEATHER_API_KEY}&units=metric`,
          { signal: controller.signal }
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    return () => controller.abort();
  }, [parameter]);

  return { data, loading };
}

export default useFetch;
