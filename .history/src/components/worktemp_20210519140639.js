import data from '../work.json'
import workts from '../styles/worktemp.module.scss'

const WorkTemp = ()=> {
    return (
        <div className={workts.container}>
            {data.data.filter(i => window.location.href.split("/")[4] == i.name).map(item => (
            <>
            <img src={item.url} alt={item.url} />
            <div className={workts.flex}>

            {item.website !== null ?<img src="https://img.icons8.com/color/48/000000/internet--v1.png"/>: <></>}
            </div>
            <h2>{item.name}</h2>
            <div>
                {item.skillstacks.split(",").map(i=><img src={i}/>)}
            </div>
            <h3>{item.intro}</h3>
            <div className={workts.desc}>{item.desc}</div>
            </>
            ))}
        </div>
    )
}

export default WorkTemp