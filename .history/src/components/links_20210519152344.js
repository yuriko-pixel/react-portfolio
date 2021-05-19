import links from '../styles/links.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Links = () => {
    return (
        <>
        <div className={links.linkcontainer}>
            <a href="https://github.com/yuriko-pixel" className={links.linkcontainer1}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/yuriko-darragh-81298a145/" className={links.linkcontainer2}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://twitter.com/yuriko23406231" to="/contact" className={links.linkcontainer3}><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        </>
    )
}

export default Links