import React, { useState, useEffect } from 'react';
import './Hero.css';
import requests from '../requests';

const Hero = () => {
  const [featured, setFeatured] = useState({});
  const url = 'https://api.themoviedb.org/3';
  const { fetchTrending } = requests;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + fetchTrending);
        console.log(response);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();

        setFeatured(
          data.results[Math.floor(Math.random() * data.results.length)],
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //slice the description text and put ... at the end
  function truncate(string, nchars) {
    return string?.length > nchars
      ? string.substr(0, nchars - 1) + '...'
      : string;
  }

  return (
    <header
      className="hero"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${featured?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <div className="container">
        <div className="hero__contents">
          <h2 className="hero__title">
            {featured?.title || featured?.name || featured?.original_name}
          </h2>
          <p className="hero__overview">{truncate(featured?.overview, 160)}</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
