import React, { Component } from 'react';
import styles from './App.module.scss';
import Routes from '../../routes/Routes';
import Header from '../../components/Header';

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;







