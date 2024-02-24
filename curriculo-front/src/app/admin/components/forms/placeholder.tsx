import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useProducts() {
  const { data, error } = useSWR(
    "https://65ce3462c715428e8b403033.mockapi.io/api/v1/products",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
