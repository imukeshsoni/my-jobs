import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import { StorageService } from '../../services/StorageService';

interface Props {
  showLogin?: boolean;
  buttonText?: string;
}

const Header: FC<Props> = ({
  showLogin = true,
  buttonText = 'Login/Signup',
}) => {
  const authService = new AuthService(new StorageService());
  let navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const user = authService.getUserData();
    if (user && user.name) {
      setUserName(user.name);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    authService.logoutUser();
    navigate('/');
  };

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
          <span>
            {isLoggedIn ? (
              <Avatar onClick={(e) => handleClick(e)}>{userName[0]}</Avatar>
            ) : showLogin ? (
              btn
            ) : (
              ''
            )}
          </span>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={closeMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
