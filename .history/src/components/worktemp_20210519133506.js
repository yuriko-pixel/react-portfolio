import data from '../work.json'

const WorkTemp = ()=> {
    return (
        <div>
            {data.data.filter(i => window.location.href.split("/")[4] == i.name).map(item => (
            <>
            <img src={item.url} alt={item.url} />
            <h2>{item.name}</h2>
            <div>
                {item.skillstacks.split(",").map(i=><div dangerouslySetInnerHTML={{__html: {i}}}></div>)}
            </div>
            <h3>{item.intro}</h3>
            <div>{item.desc}</div>
            </>
            ))}
        </div>
    )
}

export default WorkTemp