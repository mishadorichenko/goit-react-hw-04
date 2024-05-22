import axios from 'axios';

const ACCESS_KEY = '4hZrIawaE5jfNJndUDq42lnLuCskWYvxUsMi_ZcxlgI';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getPhotos = async (page, searchQuery) => {
  const response = await axios.get('search/photos', {
    params: {
      query: searchQuery,
      page: page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
