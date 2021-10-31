import React from 'react';
import requests from '../requests';
import CategoryRow from './CategoryRow';

const MovieList = () => {
  return (
    <main>
      <CategoryRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <CategoryRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <CategoryRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isOriginals
      />
      <CategoryRow
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <CategoryRow
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <CategoryRow
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <CategoryRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <CategoryRow
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </main>
  );
};

export default MovieList;
