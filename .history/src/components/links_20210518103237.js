import { Link } from 'react-router-dom';
import links from '../styles/links.module.scss'

const Links = () => {
    return (
        <div>
            <Link to="/about" className={links.linkcontainer}>About</Link>
            <Link to="/works">Works</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Links