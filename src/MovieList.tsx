import { useMovies } from './api';

interface Movie {
  id: number;
  title: string;
}

const MovieList = () => {
  const { data, status } = useMovies();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  return (
    <ul>
      {data.results.map((movie: Movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MovieList;