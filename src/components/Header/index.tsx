import { Button } from '@mui/material';
import React, { FC } from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const Header: FC<Props> = ({ children }) => {
  const handleLogin = () => {};
  return (
    <>
      <div className="header__container">
        <div className="inner__container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/login">
            <Button variant="outlined">Login/Signup</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
