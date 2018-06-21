import React, { Component } from 'react';
import './App.css';
import TopNav from './header.js';
import About from './about.js';
import Work from './work.js';
import SimpleSlider from './slider.js';
import Footer from './footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <About />
        <Work />
        <SimpleSlider />
        <Footer />
      </div>
    );
  }
}

export default App;

