import { apiURL } from '@/utils/baseurl';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const getAllThreads = async (token: string) => {
  try {
    const res: AxiosResponse = await axios.get(apiURL + 'thread', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('result', res);
    return res.data.threads;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Something went wrong');
    } else {
      console.error('Unexpected Error:', error);
      throw error;
    }
  }
};
