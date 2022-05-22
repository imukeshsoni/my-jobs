import { TextField } from '@mui/material';
import React, { EventHandler, FC } from 'react';
import './styles.css';

interface Props {
  children: React.ReactNode;
}

type data = {
  label: string;
  type: string;
  placeHolder?: string;
  action?: Function;
  required?: boolean;
};

const GenericComponent: FC<Props> = ({ children }) => {
  return (
    <div className="generic__container">
      <div className="generic__wrapper">{children}</div>
      <div className="fragment-1"></div>
      <div className="fragment-2"></div>
    </div>
  );
};

export default GenericComponent;
