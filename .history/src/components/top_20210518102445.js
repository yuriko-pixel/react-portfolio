import cat from '../images/cat.png'
import tops from '../styles/top.module.scss'

const Top = ()=> {
    return (
        <div className={tops.container}>
            <img src={cat} className={tops.cat} />
        </div>
    )
}

export default Top