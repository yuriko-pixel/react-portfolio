import navs from '../styles/nav.module.scss'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav role="navigation">
        <div className={navs.menuToggle}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className={menu}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/works"><li>Works</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </div>
      </nav>
    )
}

export default Nav