import data from '../work.json'

const WorkTemp = (props)=> {
    return (
        <div>
            {data.data.filter(item ==props.name  => (
                <div>{item.name}</div>
            ))}
        </div>
    )
}

export default WorkTemp