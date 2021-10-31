import React, { useState, useEffect, useLayoutEffect } from 'react';
import './CategoryRow.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const CategoryRow = ({ title, fetchUrl, isOriginals = false }) => {
  const base_url = 'https://api.themoviedb.org/3';
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(base_url + fetchUrl);
        if (!response.ok) {
          throw new Error('Cannot fetch data');
        }
        const data = await response.json();
        setCategories(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();

    setIsLoading(false);
  }, [fetchUrl]);

  function truncate(string, nchars) {
    return string?.length > nchars
      ? string.substr(0, nchars - 1) + '...'
      : string;
  }

  const opts = {
    height: '400px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row container">
      <h2>{title}</h2>
      <div className="row__posters">
        {categories.map(
          (category) =>
            ((isOriginals && category.poster_path) ||
              (!isOriginals && category.backdrop_path)) && (
              <div className="row__contents" key={category.id}>
                <img
                  onClick={() => handleClick(category)}
                  className={`row__poster ${isOriginals && 'row__posterLarge'}`}
                  src={`https://image.tmdb.org/t/p/original${
                    isOriginals ? category?.poster_path : category?.poster_path
                  }`}
                  alt={category.id}
                />
              </div>
            ),
        )}
      </div>
      {trailerUrl && (
        <Youtube videoId={trailerUrl} opts={opts} className="ytbModal" />
      )}
    </div>
  );
};

export default CategoryRow;
