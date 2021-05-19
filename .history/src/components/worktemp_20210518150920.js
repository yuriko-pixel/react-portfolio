import data from '../work.json'

const WorkTemp = ()=> {
    console.log()
    return (
        <div>
            {data.data.filter(window.location.href.split("/")[4] == data.data.name).map(item => (<div>{item.name}</div>))}
        </div>
    )
}

export default WorkTemp