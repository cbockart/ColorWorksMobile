// InputField.jsx
import React from 'react';
import './MessagingInput.css';

const MessagingInput = ({placeholder, type, value, onChange}) => {
  return (
    <div className="Messaging-input-rectangle">
        <textarea className="Messaging-textarea" type={type} placeholder={placeholder} value={value} onChange={onChange}></textarea>
    </div>
  );
};

export default MessagingInput;
