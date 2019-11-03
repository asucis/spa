import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {
    toast.info(
      <p>
        <span role="img" aria-label="world-map">
          🗺️
        </span>{' '}
        International Night 2019 is happening on November 15, Get your free
        tickets <a href="https://signup.asucis.com">here</a>
        <br />
        <br />
        #ASUINTLNIGHT
        <br />
        #asuglobal
      </p>,
      {
        position: 'bottom-center',
        autoClose: 30000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      }
    );
  }
  render() {
    return (
      <div className="App">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Hero />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
