import data from '../work.json'

const WorkTemp = ()=> {
    return (
        <div>
            {data.data.map(item => (
                <div>{item.name}</div>
            ))}
        </div>
    )
}

export default WorkTemp