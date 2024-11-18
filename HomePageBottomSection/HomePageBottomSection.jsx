import ButtonNavigate from '../Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import strings from '../../navigationStrings.json';
import './HomePageBottomSection.css'

const HomePageBottomSection = () => {
    return (
        <>
            <div className="home-pages-button-container">
                <ButtonNavigate buttonText="Back to Home" to ={strings.homePage}></ButtonNavigate>
            </div>
            <div className='disclaimer-all-home-pages'>
                While this information is based on scientific research, individual preferences may differ. 
                This information is for educational purposes only. 
                These suggestions are based on generalizations that may differ from your own experience.
            </div>
        </>
    );
}
export default HomePageBottomSection;