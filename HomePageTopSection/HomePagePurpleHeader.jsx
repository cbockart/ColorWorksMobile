import './HomePagePurpleHeader.css';

const HomePagePurpleHeader = ({headerText}) => {
    return (
        <>
            <div className="purple-title-bubble">
                <div className='purple-title-bubble-text'>
                    {headerText}
                </div>
            </div>
        </>
    );
}
export default HomePagePurpleHeader;