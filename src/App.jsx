import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';


export default function App() {

    return (
        <div className = "app-container">
            <Header/>
            <div className = "app-body">
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
}