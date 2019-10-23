import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import WeatherCard from './components/WeatherCard';
import WeatherData from './components/WeatherData';


class App extends React.Component {

 
  render(){
    return (
      <div className="App">
        <Nav/>
        <header className="App-header">
        <WeatherCard />
        <WeatherData/>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
