import React from 'react';
import './ErrorBox.css'; // Import ButtonNavigate.css

const ErrorBox = ({text}) => {
  return (
    <div className="error-rectangle">
        <text>{text}</text>
    </div>
  );
};

export default ErrorBox;
