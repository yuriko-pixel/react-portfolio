import works from '../styles/works.module.scss'
import dough from '../images/ddd_screen.png'
const Works = () => {
    return (
        <div>
            <h2>Works</h2>
            <div className={works.workcon}><img src={dough}/></div>
        </div>
    )
}

export default Works;