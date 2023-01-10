import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Categories from './Categories';
import Visited from './Visited';
import Recherche from './Recherche';
import Footer from './Footer'
function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Recherche></Recherche>
      <Categories></Categories>
      <Visited></Visited>
      <Footer></Footer>
    </div>
    
  );
}


export default HomePage


