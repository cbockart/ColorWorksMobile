import ImageByMappingId from "../ImageByMappingId";
import { getValueForMappingId } from "../../colorMapping";
import './ImageWithHeader.css'

const ImageWithHeader = ({mappingId}) => {
    return (    
        <>
            <div className='image-header'>{getValueForMappingId(mappingId)}</div>
                <div className='home-pages-img-container'>
                    <ImageByMappingId mappingId={mappingId}/>
            </div>
        </>
    );
}
export default ImageWithHeader;