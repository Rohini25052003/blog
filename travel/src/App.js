import React from 'react';
import Header from './files/header';
import Home from './files/home';
import About from './files/about';
import Discover from './files/discover';
import Experience from './files/experience';
import Video from './files/video';
import Place from './files/place';
import Subscribe from './files/subscribe';
import Sponsor from './files/sponsor';
import Footer from './files/footer';
import './App.css'; // Assuming you have a global App.css file for styles
import { AuthPage } from './register/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './files/main';

const App = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<AuthPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/footer" element={<Footer/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/place" element={<Place/>}></Route>
      <Route path="/sponsor" element={<Sponsor/>}></Route>
      <Route path="/subscribe" element={<Subscribe/>}></Route>
      <Route path="/video" element={<Video/>}></Route>
      <Route path="/header" element={<Header/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
      </Routes>
      </BrowserRouter>
        
    );
};

export default App;
