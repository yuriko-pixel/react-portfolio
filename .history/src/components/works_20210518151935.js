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
                <a data-flickr-embed="true" data-header="true" href="https://www.flickr.com/photos/193021694@N07/51186851248/" title="doughnut-iMac">
                    <img src="https://live.staticflickr.com/65535/51186851248_6e283827e7_n.jpg" width="320" height="275" alt="doughnut-iMac"></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
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