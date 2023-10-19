import { useMovies, Movie } from './api';
import './App.css';


interface MovieListProps {
  addedMovies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ addedMovies }) => {
  const { movies, status } = useMovies();

  const allMovies = [...movies, ...addedMovies];

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  return (
    <ul className="bg-accent">
      {allMovies.map((movie: Movie) => (
        <li key={movie.id} className="p-4 bg-blue-100 rounded shadow">
          {movie.title}
        </li>
      ))}
    </ul>
  );
  
   
};

export default MovieList;
