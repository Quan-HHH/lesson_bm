import React from 'react';
// import logo from './logo.svg';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import './asset/font/iconfont.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
}

export default App;
