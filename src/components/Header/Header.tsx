import { Button } from '@mui/material';
import React from 'react';
import './Header.css'

import logo from '../../assets/logo.svg';

function Header() {
  const handleLogin = () => {};
  return (
    <>
    <div className='header__container'>
      <div className="inner__container">

          <img src={logo} alt="" />
          <Button variant="outlined">
            Login/Signup
          </Button>
      </div>
    </div>
    </>
  );
}

export default Header;
