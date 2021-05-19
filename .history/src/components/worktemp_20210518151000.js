import data from '../work.json'

const WorkTemp = ()=> {
    console.log()
    return (
        <div>
            {data.data.filter(i => window.location.href.split("/")[4] == i.name).map(item => (<div>{item.name}</div>))}
        </div>
    )
}

export default WorkTemp