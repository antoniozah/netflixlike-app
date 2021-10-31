import React from 'react';
import './Home.css';
import Hero from './Hero';
import MovieList from './MovieList';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <MovieList />
      <Footer />
    </>
  );
};

export default Home;
