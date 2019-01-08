import React from 'react';
import styles from './FancyPopup.css';

const FancyPopup = ({ path }) => {
  const ext = (/[.]/.exec(path)) ? /[^.]+$/.exec(path) : undefined;
  let popup;
  let width = window.innerWidth - window.innerWidth * 0.2;
  console.log(ext)
  if (Array.isArray(ext)) {
    switch (ext[0]) {
      case 'jpg':
      case 'png':
      case 'svg':
        popup =  <img src={path} className={styles.FancyPopupImage}/>;
        break;
      case 'pdf':
        popup = <embed src={path} type="application/pdf" width={`${width}px`}/>;
        break;
      case 'xls':
      case 'xlsx':
        popup = <embed src={path} type="application/vnd.ms-excel" width={`${width}px`}/>;
        break;
      default:
        popup =  <img src={path} className={styles.FancyPopupImage}/>;
    }
  }
  return popup;
}

export default FancyPopup;
