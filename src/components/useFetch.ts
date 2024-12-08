import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setLoading(false);
          setError(true);
          throw new Error("error happend on the url");
        }
        const data = await res.json();

        setData(data);
        setLoading(false);
        setError(false);
        return;
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchMovie();
  }, [url]);

  return [data, isLoading, error] as const;
}

export default useFetch;
