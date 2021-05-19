import { Link } from 'react-router-dom';
import links from '../styles/links.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Links = () => {
    return (
        <>
        <div className={links.linkcontainer}>
            <Link to="/about" className={links.linkcontainer1}><FontAwesomeIcon icon={faGithub} /></Link>
            <Link to="/works" className={links.linkcontainer2}><FontAwesomeIcon icon={faLinkedin} /></Link>
            <Link to="/contact" className={links.linkcontainer3}><FontAwesomeIcon icon={faTwitter} /></Link>
        </div>
        <div className={links.border}></div>
        </>
    )
}

export default Links