import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import left from '../../assets/images/leftArrow.svg';
import mic from '../../assets/images/mic.svg';
import threeDots from '../../assets/images/threeDots.svg';

function Header() {
  return (

    <div className={style.header} data-testid="header-container">
      <Link to="/" data-testid="go-to-home">
        <img src={left} alt="left arrow" />
      </Link>
      <span className={style.title}>All Contires</span>
      <div className={style.icons}>
        <img src={mic} alt="microphone" />
        <img src={threeDots} alt="three dots" />
      </div>
    </div>

  );
}

export default Header;
