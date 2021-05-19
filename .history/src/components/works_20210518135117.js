import works from '../styles/works.module.scss'
import dough from '../images/doughnut-iMac.png'
import magic from '../images/memnisee.png'
import pokedex from '../images/pokedex.png'
import recipe from '../images/toucan-iMac.png'
import toucan from '../images/V18ToucansProject.gif'
import fp from '../images/footprint.png'
const Works = () => {
    return (
        <>
            <h2>Works</h2>
            <div class={works.container}>
            <div className={works.flex}>
            <div class={works.workCon}>
                <img src={dough} className={works.workimg} />
                <div className={works.mask}>
                    <div className={works.caption}>It's fresh !</div>
                </div>
            </div>
                <div class={works.workCon}>
                    <img src={magic} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>It's fresh !</div>
                    </div>
                </div>
                <div class={works.workCon}>
                    <img src={pokedex} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>It's fresh !</div>
                    </div>
                </div>
                <div class={works.workCon}>
                    <img src={recipe} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>It's fresh !</div>
                    </div>
                </div>
                <div class={works.workCon}>
                    <img src={toucan} className={works.workimg} />
                    <div className={works.mask}>
                        <div className={works.caption}>It's fresh !</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Works;