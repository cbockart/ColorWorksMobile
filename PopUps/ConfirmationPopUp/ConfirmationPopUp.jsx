import React from 'react';
import './ConfirmPopup.css';

const ConfirmPopup = ({ visible, onCancel, onConfirm }) => {
  if (!visible) return null;

  return (
    <div className="confirm-popup-container">
      <div className="confirm-popup">
        <p className="confirm-message">Are you sure you want to confirm your color selection?</p>
        <div className="button-container">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="confirm-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;