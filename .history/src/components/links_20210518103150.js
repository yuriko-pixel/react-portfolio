import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Links