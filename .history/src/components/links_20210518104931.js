import { Link } from 'react-router-dom';
import links from '../styles/links.module.scss'

const Links = () => {
    return (
        <>
        <div className={links.linkcontainer}>
            <Link to="/about" className={links.linkcontainer1}>About</Link>
            <Link to="/works" className={links.linkcontainer2}>Works</Link>
            <Link to="/contact" className={links.linkcontainer3}>Contact</Link>
        </div>
        <div className={links.border}></div>
        </>
    )
}

export default Links