import { QueryClient, QueryClientProvider } from 'react-query';
import MovieList from './MovieList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieList />
    </QueryClientProvider>
  );
}

export default App;
