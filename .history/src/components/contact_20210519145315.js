import cat from '../images/cat2.png'
import cons from '../styles/contact.module.scss'

const Contact = () => {
    return (
        <div>
            <img src={cat} className={cons.img}/>
        </div>
    )
}

export default Contact