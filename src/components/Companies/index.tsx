import React from 'react';

import './styles.css';

import goldline from '../../assets/goldline.png';
import ideaa from '../../assets/ideaa.png';
import kanba from '../../assets/kanba-1.png';
import lighting from '../../assets/lighting.png';
import liva from '../../assets/liva.png';
import solaytic from '../../assets/solaytic.png';
import velocity from '../../assets/velocity-9.png';
import ztos from '../../assets/ztos.png';

function Companies() {
  const companies = [
    solaytic,
    kanba,
    lighting,
    ztos,
    kanba,
    goldline,
    ideaa,
    liva,
    velocity,
  ];
  return (
    <>
      <div className="company__title">Companies who trust us</div>
      <div className="companies">
        <div className='company'>
          <img src={solaytic} className="company" />
          <img src={kanba} className="company" />
          <img src={lighting} className="company" />
          <img src={ztos} className="company" />
          <img src={kanba} className="company" />
        </div>
        <div className='company'>
          <img src={goldline} className="company" />
          <img src={ideaa} className="company" />
          <img src={liva} className="company" />
          <img src={velocity} className="company" />
        </div>
      </div>
    </>
  );
}

export default Companies;
