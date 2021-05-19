import works from '../styles/works.module.scss'
import dough from '../images/doughnut-iMac.png'
import magic from '../images/memnisee.png'
import pokedex from '../images/pokedex.png'
import recipe from '../images/toucan-iMac.png'
import toucan from '../images/V18ToucansProject.gif'
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <>
            <h2>Works</h2>
            <div class={works.container}>
            <div className={works.flex}>
            <Link to={'/works/'+'1'} class={works.workCon}>
                <img src={dough} className={works.workimg} />
                <div className={works.mask}>
                    <div className={works.caption}>Doughnut Doughnut Doughnut!</div>
                </div>
            </Link>
                <Link to={'/works/'+'1'} class={works.workCon}>
                    <img src={magic} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>Magical Meminisee</div>
                    </div>
                </Link>
                <Link to={'/works/'+'1'} class={works.workCon}>
                    <img src={pokedex} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>Pokedex</div>
                    </div>
                </Link>
                <Link to={'/works/'+'1'} class={works.workCon}>
                    <img src={recipe} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>Toucans Recipe</div>
                    </div>
                </Link>
                <Link to={'/works/'+'1'} class={works.workCon}>
                    <img src={toucan} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>Toucans Blog</div>
                    </div>
                </Link>
            </div>
            </div>
        </>
    )
}

export default Works;