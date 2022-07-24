import axios from 'axios';

const API_KEY = '27641308-8655ee82f3657fe3b5b399be2';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImages(query, page) {
  const resp = axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data);

  return resp;
}
