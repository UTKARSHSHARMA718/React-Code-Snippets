import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setData(null);
      setError("");
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw "Unable to fetch data.";
        }
        const resJson = await res.json();
        setData(resJson);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return [data, error, isLoading];
};
