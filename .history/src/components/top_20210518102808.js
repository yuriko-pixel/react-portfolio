import cat from '../images/cat.png'
import tops from '../styles/top.module.scss'

const Top = ()=> {
    return (
        <div className={tops.container}>
            <h3>I'm Yuriko Darragh</h3>
            <img src={cat} className={tops.cat} />
        </div>
    )
}

export default Top