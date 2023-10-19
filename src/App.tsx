import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { Movie } from './api';
import './App.css';
import 'tailwindcss/tailwind.css'

const queryClient = new QueryClient();

function App() {
  const [addedMovies, setAddedMovies] = useState<Movie[]>([]);
  const addMovie = (movie: Movie) => setAddedMovies(prevMovies => [...prevMovies, movie]);

  return (
    <QueryClientProvider client={queryClient}>
      <MovieList addedMovies={addedMovies} />
      <AddMovie addMovie={addMovie} />
    </QueryClientProvider>
  );
}

export default App;
