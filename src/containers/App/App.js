import React, { Component } from 'react';
import styles from './App.css';
import { filelist } from '../../../mock/filelist';

import Fancybox from '../../components/Fancybox/Fancybox';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Fancybox files={filelist} />
      </div>
    );
  }
}

export default App;
