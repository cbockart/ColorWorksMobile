import PageInfoHeader from "./HomePagePurpleHeader";
import SelectAccountDropdown from "../selectAccountDropdown/SelectAccountDropdown";
import ImageWithHeader from "./ImageWithHeader";
import "./HomePageTopSection.css"

const HomePageTopSection = ({mappingId, headerText, hasDropdown, handleProfileChange}) => {
    const dropdownComponent = hasDropdown ?
        (
            <>
                <div className="change-account-text">
                    Please select the profile you would like to view
                </div>
                <div className="dropdown">
                    <SelectAccountDropdown handleProfileChange={handleProfileChange}/>
                </div>
                <div className="top-image-and-header">
                    <ImageWithHeader mappingId={mappingId}/>
                </div>
            </>
        ): null;

    return (
        <>
            <PageInfoHeader headerText={headerText}/>
            {dropdownComponent}
        </>
    );
}
export default HomePageTopSection;