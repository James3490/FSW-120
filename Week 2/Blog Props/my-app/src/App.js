import React from 'react';

import './App.css';
import Footer from './footer';
import Header from './header';
import Data from './Data';
import Blog from './Blog'

function App() {
  const BlogData = Data.map(Blog => <Blog key title={Blog.Title} subtitle={Blog.Subtitle} author={Blog.Author} Date={Blog.Date}/>)
  return (
      <div>
      <header id="header">
        <div className="overlay">
        <div className="navigation">
        <div className="leftnav">
        <a href="bootstrap">Start Bootstrap</a>
        </div>
        <div className="topnav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#samplepost">Sample Post</a>
        <a href="#contact">Contact</a>
        </div>
        </div>
        <div id="centerHeading">
          <h1>Clean Blog</h1>
          <h2>A Blog theme by Start Bootstrap</h2></div>
        </div>
      </header>
      <main>
        {BlogData}
      </main>
      

    <Footer></Footer>

    </div>
  );
}


export default App;
