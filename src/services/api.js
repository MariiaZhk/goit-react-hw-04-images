import axios from 'axios';

const KEY = '40710997-4253618bc3055cabfb83eaf18';
axios.defaults.baseURL = 'https://pixabay.com';

export async function fetchImages(query, page) {
  const { data } = await axios.get('/api/', {
    params: {
      key: KEY,
      image_type: 'photo',
      page,
      q: query,
      per_page: 12,
      orientation: 'horizontal',
    },
  });
  return data;
}
