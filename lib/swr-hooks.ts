import useSWR from 'swr';

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}

export function useSets() {
  const { data, error } = useSWR(`/api/sets/get-sets`, fetcher);

  return {
    sets: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useSet(id: string) {
  return useSWR(`/api/sets/get-set?id=${id}`, fetcher);
}
