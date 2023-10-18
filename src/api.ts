import { useQuery } from 'react-query';

const fetchMovies = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e1293c525ada1c5154fe661661e337c2');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const useMovies = () => {
  return useQuery('movies', fetchMovies);
};