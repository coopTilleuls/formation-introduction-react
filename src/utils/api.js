import {fetcher} from './fetcher';
import useSWR from 'swr';

const baseURL = 'https://demo.api-platform.com';

const getUrl = (url, params) => {
  const requestUrl = new URL(url, baseURL);

  if (params){
    Object.entries(params).forEach(([key, value]) => {
      requestUrl.searchParams.set(key, value);
    });
  }

  return requestUrl.toString();
}

export const useGetSWR = (url, params) => {
  return useSWR(getUrl(url, params), fetcher);
}

export const fetchGet = (url, params) => {
  return fetcher(getUrl(url, params));
}

export const fetchPost = (...args) => {
  return fetcher(...args);
}
