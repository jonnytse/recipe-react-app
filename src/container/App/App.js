import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Routes from '../../routes/Routes';

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Header />
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;







