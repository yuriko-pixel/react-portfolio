import works from '../styles/works.module.scss'
import dough from '../images/doughnut-iMac.png'
import magic from '../images/memnisee.png'
import pokedex from '../images/pokedex.png'
import recipe from '../images/toucan-iMac.png'
import toucan from '../images/V18ToucansProject.gif'

const Works = () => {
    return (
        <div>
            <h2>Works</h2>
            <div className={works.workcon}><img src={dough} className={works.workimg}/></div>
            <div className={works.workcon}><img src={magic} className={works.workimg}/></div>
            <div className={works.workcon}><img src={pokedex} className={works.workimg}/></div>
            <div className={works.workcon}><img src={toucan} className={works.workimg}/></div>
            <div className={works.workcon}><img src={toucan} className={works.workimg}/></div>
        </div>
    )
}

export default Works;