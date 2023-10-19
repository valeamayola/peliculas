import React, { useState } from 'react';
import { Movie } from './api';
import './App.css';

interface AddMovieProps {
    addMovie: (movie: Movie) => void;
  }
  
  const AddMovie: React.FC<AddMovieProps> = ({ addMovie }) => {
  const [title, setTitle] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addMovie({ id: Date.now(), title });
    setTitle('');
  };

  return (
      <form onSubmit={onSubmit} className="p-6 space-y-4  bg-green-500">
        <label className="block">
          <span className="text-gray-700">Título de la película:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn btn-outline btn-lg">Agregar película</button>
      </form>
  );
  
};

export default AddMovie;
