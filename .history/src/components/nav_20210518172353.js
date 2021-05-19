import navs from '../styles/nav.module.scss'

const Nav = () => {
    return (
        <div id="top-editarea">
            <input type="checkbox" id="main-nav" class="d-none"></input>
            <div className={navs.wrap}>
                <label for="main-nav" class="nav-icon"></label>
            </div>
            <nav class="header-nav-wrap">
            <ul class="d-flex list-unstyled header-nav">
                <li><a href="https://webabc.hatenablog.jp/archive/category/HTML%2FCSS">HTML&amp;CSS</a></li>
                <li><a href="https://webabc.hatenablog.jp/archive/category/JavaScript">JavaScript</a></li>
                <li><a href="https://webabc.hatenablog.jp/archive/category/Wordpress">Wordpress</a></li>
                <li><a href="https://webabc.hatenablog.jp/archive/category/Laravel">Laravel</a></li>
            </ul>
        </nav>
        </div>

    )
}

export default Nav