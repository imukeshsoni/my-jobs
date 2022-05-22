import { Button } from '@mui/material';
import React, { FC } from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

interface Props {
  showLogin?: boolean;
  buttonText?: string;
}

const Header: FC<Props> = ({
  showLogin = true,
  buttonText = 'Login/Signup',
}) => {
  const handleLogin = () => {};

  const btn: JSX.Element = (
    <Link to="/login">
      <Button variant="outlined">{buttonText}</Button>
    </Link>
  );

  return (
    <>
      <div className="header__container">
        <div className="inner__container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          {showLogin ? btn : ''}
        </div>
      </div>
    </>
  );
};

export default Header;
