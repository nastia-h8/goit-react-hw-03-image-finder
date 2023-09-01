import axios from 'axios';

const API_KEY = '29394267-31e8822dcf81ed000db5cdbcd';
const imgPerPage = 12;
axios.defaults.baseURL = `https://pixabay.com/api`;

export async function getImages(query, page) {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${imgPerPage}`
  );

  return response.data;
}
