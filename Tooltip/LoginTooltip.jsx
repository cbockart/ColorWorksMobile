import React from 'react';
import Tooltip from './Tooltip';
import infoImage from './../../Icons/purple_information.png';

const LoginTooltip = ({tooltipText}) => {
  return (
    <div>
      <Tooltip text={tooltipText}>
        <img src={infoImage} alt="Custom Icon" />
      </Tooltip>
    </div>
  );
};

export default LoginTooltip;
