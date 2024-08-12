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

const App = () => {
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
            <BrowserRouter>
             <Routes>
            <Route path="/signup" element={<AuthPage/>}></Route>
            </Routes>
            </BrowserRouter>

        </div>
        
        
    );
};

export default App;
