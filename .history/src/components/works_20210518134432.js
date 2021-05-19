import works from '../styles/works.module.scss'
import dough from '../images/doughnut-iMac.png'
import magic from '../images/memnisee.png'
import pokedex from '../images/pokedex.png'
import recipe from '../images/toucan-iMac.png'
import toucan from '../images/V18ToucansProject.gif'
import fp from '../images/footprint.png'
const Works = () => {
    return (
        <div className={works.container}>
            <h2>Works</h2>
            <div className={works.flex}>
            <div class={works.workCon}>
                <img src={dough} className={works.workimg} />
                <div className={works.mask}>
                    <div className={works.caption}>It's fresh !</div>
                </div>
            </div>
                <figure className={works.workcon}>
                    <img src={magic} className={works.workimg}/>
                    <figcaption  className={works.hoverMask}></figcaption>
                </figure>
                <figure className={works.workcon}>
                    <img src={pokedex} className={works.workimg}/>
                    <figcaption  className={works.hoverMask}></figcaption>
                </figure>
                <figure className={works.workcon}>
                    <img src={toucan} className={works.workimg}/>
                    <figcaption  className={works.hoverMask}></figcaption>
                </figure>
                <figure className={works.workcon}>
                    <img src={recipe} className={works.workimg}/>
                    <figcaption  className={works.hoverMask}></figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Works;