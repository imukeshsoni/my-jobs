import React, { useContext, useEffect, useState, FC } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import BaseRouter from './routes';
import HomePage from './pages/homePage';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div
          id="page-container"
          className="enable-page-overlay side-scroll page-header-fixed page-header-dark main-content-narrow side-trans-enabled"
        >
          <BaseRouter />
        </div>
      </Router>
      {/* <Spinner isLoading={isLoading}/> */}
    </React.Fragment>
  );
}

export default App;
