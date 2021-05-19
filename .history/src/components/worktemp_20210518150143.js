import data from '../work.json'

const WorkTemp = (props)=> {
    console.log(props)
    return (
        <div>
            {data.data.fill(props.name == data.data.name).map(item => (<div>{item.name}</div>))}
        </div>
    )
}

export default WorkTemp