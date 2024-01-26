import React, { useState } from 'react';

interface InputMovieProps {
  onAdd: (text: string) => void;
}

const InputMovie: React.FC<InputMovieProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const movieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const movieAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={movieChange} />
      <button onClick={movieAdd}>Add</button>
    </div>
  );
};

export default InputMovie;
