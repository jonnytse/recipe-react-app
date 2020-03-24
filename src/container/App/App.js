import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
// import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Header />
        {/* <Navbar /> */}
        <Searchbar />
      </div>
    );
  }
}

export default App;
