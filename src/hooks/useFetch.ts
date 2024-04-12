import { useEffect, useState } from "react"
import { UseFetchProps } from "../types";
import { toast } from "react-toastify";
import { getUrlWithPathParam } from "../utils/api";

export const useFetch = <T>({ endpoint, pathParam, dependencies = [] }: UseFetchProps ) => {

  const [data, setData] = useState(null as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect( () => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/${getUrlWithPathParam(endpoint,pathParam)}`).then(res => res.json());
        
        setData(response)
      } catch (error: any) {
        setError(error.message)
        toast('Something went wrong in fetching data.', { type: 'error' })
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, dependencies);

  return {data, isLoading, error }
}
