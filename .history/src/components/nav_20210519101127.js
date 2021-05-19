import navs from '../styles/nav.module.scss'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link to="#"><li>Home</li></Link>
            <Link to="#"><li>About</li></Link>
            <Link to="#"><li>Info</li></Link>
          </ul>
        </div>
      </nav>
    )
}

export default Nav