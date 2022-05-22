/* eslint-disable */
import React, { FC } from 'react';
import Header from '../Header';
import './style.css';
// import Footer from "./Footer";
// import { Helmet } from "react-helmet";

interface Props {
  children: React.ReactNode;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="fragment-1"></div>
      <div className="fragment-2"></div>

      <div className="wrapper">{children}</div>
    </React.Fragment>
  );
};

export default BaseLayout;
