import cat from '../images/cat.png'
import tops from '../styles/top.module.scss'
import Links from './links'

const Top = ()=> {
    return (
        <div className={tops.container}>
            <img src={cat} className={tops.cat} />
            <h3>I'm Yuriko Darragh</h3>
            <span>Full-stack developper based in Tokyo</span>
            <Links/>
        </div>
    )
}

export default Top