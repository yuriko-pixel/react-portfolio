import data from '../work.json'

const WorkTemp = ()=> {
    console.log()
    return (
        <div>
            {data.data.filter(i => window.location.href.split("/")[4] == i.name).map(item => (
            <>
            <img src={item.url} />
            <h2>{item.name}</h2>
            <span>{item.intro}</span>
            <div>{item.desc}</div>
            </>
            ))}
        </div>
    )
}

export default WorkTemp