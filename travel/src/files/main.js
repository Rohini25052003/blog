import React from 'react';
import Header from './header';
import Home from './home';
import About from './about';
import Discover from './discover';
import Experience from './experience';
import Video from './video';
import Place from './place';
import Subscribe from './subscribe';
import Sponsor from './sponsor';
import Footer from './footer';
// import './App.css'; // Assuming you have a global App.css file for styles
import { AuthPage } from '../register/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <main>
                <Home />
                <About />
                <Discover />
                <Experience />  
                <Video />
                <Place />
                <Subscribe />
                <Sponsor />
                
                
            </main>
           
            <Footer />
           

        </div>
        
        
    );
};

export default Main;
