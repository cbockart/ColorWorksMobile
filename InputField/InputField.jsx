// InputField.jsx
import React from 'react';
import './InputField.css';

const InputField = ({ label, placeholder, type, value, onChange, readOnly}) => {
  return (
    <div className="input-rectangle" style={readOnly ? {backgroundColor: "#D9D9D9"} : {}}>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} readOnly={readOnly} style={readOnly ? {backgroundColor: "#D9D9D9"} : {}}></input>
    </div>
  );
};

export default InputField;
