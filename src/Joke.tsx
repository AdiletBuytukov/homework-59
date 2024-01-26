import React, { useState, useEffect } from 'react';

const JokeApp: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setJoke(data.value);
      } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
      }
    };
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Chuck Norris Joke:</h2>
      {<p>{joke}</p>}
    </div>
  );
};

export default JokeApp;
