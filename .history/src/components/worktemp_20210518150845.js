import data from '../work.json'

const WorkTemp = (props)=> {
    console.log(window.location.href.split("/")[4])
    return (
        <div>
            {data.data.fill(props.name == data.data.name).map(item => (<div>{item.name}</div>))}
        </div>
    )
}

export default WorkTemp