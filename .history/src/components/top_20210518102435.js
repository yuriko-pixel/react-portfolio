import cat from '../images/cat.png'
import tops from '../styles/top.module.scss'

const Top = ()=> {
    return (
        <div className={tops.container}>
            <img src={cat} className={top.cat}/>
        </div>
    )
}

export default Top