import React from 'react';
import './ColorWorksText.css'; // Import your CSS file with class names

const ColorWorksText = ({type , inputText, isBottom, dataTestId, style}) => {
  let classText = '';
  // Determine CSS class name based on the type
  switch (type) {
    case 'header':
        classText = 'colorworks-header-text';
      break;
    case 'subheader':
        classText = 'colorworks-subheader-text';
      break;
    case 'instruction':
        classText = 'colorworks-instruction-text';
      break;
    case 'info':
        isBottom ? classText = 'colorworks-information-bottom-text' : classText = 'colorworks-information-text';
      break;
    default:
        classText = 'default';
    }

  return (
    <div className={classText} data-testid={dataTestId} style={style}>
      {inputText}
    </div>
  );
};

export default ColorWorksText;
