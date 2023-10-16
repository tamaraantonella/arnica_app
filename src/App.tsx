import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './pages/home';
import React from 'react';

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
