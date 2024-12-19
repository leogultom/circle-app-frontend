import { apiURL } from '@/utils/baseurl';

export const getAllUsers = (token: string) => {
  fetch(apiURL + 'users', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      console.log('result all users', result);
    })
    .catch((err) => {
      console.error(err.message);
    });
};
