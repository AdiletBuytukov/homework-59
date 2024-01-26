import React, { useState, useEffect } from 'react';

interface AddMovieProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const AddMovie: React.FC<AddMovieProps> = React.memo(({ id, text, onDelete, onEdit }) => {
  const [inputEditing, setInputEditing] = useState(false);
  const [editName, setEditName] = useState(text);

  useEffect(() => {
    setEditName(text);
  }, [text]);

  const movieDelete = () => {
    onDelete(id);
  };

  const movieEdit = () => {
    setInputEditing(true);
  };

  const movieSave = () => {
    onEdit(id, editName);
    setInputEditing(false);
  };

  const movieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  };

  return (
    <div>
      {inputEditing ? (
        <div>
          <input type="text" value={editName} onChange={movieChange} />
          <button onClick={movieSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{text}</span>
          <button onClick={movieEdit}>Edit</button>
          <button onClick={movieDelete}>Delete</button>
        </div>
      )}
    </div>
  );
});

export default AddMovie;


