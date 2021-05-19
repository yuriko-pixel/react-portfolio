import cat from '../images/cat.png'
import tops from '../styles/top.module.scss'

const Top = ()=> {
    return (
        <div className={tops.container}>
            <img src={cat} className={tops.cat} />
            <h3>I'm Yuriko Darragh</h3>
        </div>
    )
}

export default Top