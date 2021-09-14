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
          <ul className={navs.menu}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/works"><li>Works</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/qiita"><li>Qiita</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </div>
      </nav>
    )
}

export default Nav