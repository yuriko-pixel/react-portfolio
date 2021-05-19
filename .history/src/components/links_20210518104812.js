import { Link } from 'react-router-dom';
import links from '../styles/links.module.scss'

const Links = () => {
    return (
        <div>
            <Link to="/about" className={links.linkcontainer1}>About</Link>
            <Link to="/works" className={links.linkcontainer2}>Works</Link>
            <Link to="/contact" className={links.linkcontainer3}>Contact</Link>
            <div className={links.border}></div>
        </div>
    )
}

export default Links