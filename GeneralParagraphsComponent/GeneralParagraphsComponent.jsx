import React from 'react';

const GeneralParagraphsComponent = ({ text1, text2 }) => {
    return (
        <div>
            {/*Color Header*/}
            <div className="colorworks-header-text" style={{marginLeft: "7%"}}>
                {text1}
            </div>
            {/*General Orange Paragraph*/}
            <div className="colorworks-information-text" style={{marginLeft: "7%"}}>  
                {text2}
            </div>
        </div>
    );
  };
  
  export default GeneralParagraphsComponent;