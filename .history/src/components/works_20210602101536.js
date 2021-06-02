import works from '../styles/works.module.scss'
import { Link } from 'react-router-dom';
import data from '../work.json'

const Works = () => {
    
    return (
        <>
            <h2>Works</h2>
            <div class={works.container}>
            <div className={works.flex}>
            {data.data.map( item => 
                {
                    return (<Link to={'/work/'+item.name} class={works.workCon} props={item.name}>
                <img src={item.imgurl} alt={item.imgurl} className={works.workimg}/>
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