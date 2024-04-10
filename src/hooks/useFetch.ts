import { useEffect, useState } from "react"
import { UseFetchProps } from "../types";

// TODO: move this to a api.ts file
function getUrlWithPathParam(url: string, pathParam: Record<string, unknown> | undefined) {
  if (!pathParam) return url;
  
  const spited = url.split(/[{}]/);
  return spited.reduce((acc, i) => {
    if (pathParam[i]) {
      return acc + `${pathParam[i]}`;
    } else {
      return acc + `${i}`;
    }
  }, '');
}

export const useFetch = <T>({ endpoint, pathParam, dependencies = [] }: UseFetchProps ) => {

  const [data, setData] = useState(null as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null)

  useEffect( () => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/${getUrlWithPathParam(endpoint,pathParam)}`).then(res => res.json());
        
        setData(response)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, dependencies);

  return {data, isLoading, error }
}
