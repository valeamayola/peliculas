import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

export interface Movie {
  id: number;
  title: string;
}

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const addMovie = async (movie: Movie): Promise<AxiosResponse> => {
  const response = await api.post('/movie', movie, {
    headers: {
      'Authorization': `Bearer {e1293c525ada1c5154fe661661e337c2}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return response.data;
};

const fetchMovies = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e1293c525ada1c5154fe661661e337c2');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const useMovies = () => {
  const { data, status } = useQuery('movies', fetchMovies);

  const [addedMovies, setAddedMovies] = useState<Movie[]>([]);

  const allMovies = [...(data?.results || []), ...addedMovies];

  return { 
    movies: allMovies, 
    status, 
    addMovie: (movie: Movie) => setAddedMovies(prevMovies => [...prevMovies, movie]) 
  };
};
