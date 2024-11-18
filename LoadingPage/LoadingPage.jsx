import React from 'react';
import './LoadingPage.css';

import LoadingBar from './loadingbar.png';

const LoadingPage = () => {
    return (
      <>
      <div className='LoadingPage-whole-page-container'> 
        <div className="LoadingPage-big-text">
            Loading . . .
        </div>
        <img src={LoadingBar} className="LoadingPage-picture-container" alt="logo"></img>
      </div> 
      </>
    );
};
export default LoadingPage;