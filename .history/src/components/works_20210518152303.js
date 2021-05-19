import works from '../styles/works.module.scss'
import dough from '../images/doughnut-iMac.png'
import magic from '../images/memnisee.png'
import pokedex from '../images/pokedex.png'
import recipe from '../images/toucan-iMac.png'
import toucan from '../images/V18ToucansProject.gif'
import { Link } from 'react-router-dom';
import data from '../work.json'

const Works = () => {
    
    return (
        <>
            <h2>Works</h2>
            <div class={works.container}>
            <div className={works.flex}>
            {data.data.map( item => 
                {const bane= item.imgname;
                    return (<Link to={'/works/'+item.name} class={works.workCon} props={item.name}>
                <img src={item.imgurl}/>
                <div className={works.mask}>
                    <div className={works.caption}>{item.name}</div>
                </div>
                </Link>)}
            )}
            </div>
            </div>
        </>
    )
}

export default Works;