import React from 'react';
import Header from './components/header'; // Ensure this path is correct

const Home = () => {
  function nameChange() {
    const names = ['Stalin', 'Samuel', 'Raja'];
    const int = Math.floor(Math.random() * names.length); // Adjusted for dynamic length
    return names[int];
  }

  return (
    <div>
      <Header />
      <h1>Hello {nameChange()}</h1>
    </div>
  );
}

export default Home;
