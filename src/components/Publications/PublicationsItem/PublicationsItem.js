import "./PublicationsItem.scss"
import {Link} from 'react-router-dom';

export const PublicationsItem = ({srcImage, alt, pTitle, pPreviewText, href}) => {
    return(
        <Link 
        to={href}
        className="PublicationsItem"
        >
              <h4 className="Publications-Title">{pTitle}</h4>
            <div className="PubclicationItem-Inner">
                <div className="Publications-Image-Container">
                    <img className="Publications-Img" alt={alt} src={srcImage}></img>
                </div>
                <div className="Pubclications-Content">
                    <div className="Pubclications-Text">{pPreviewText}
                    </div>
                </div>
            </div>
            <div className="Publications-Click">Подробнее</div>
        </Link>
    );
};