import cat from '../images/cat2.png'
import cons from '../styles/contact.module.scss'

const Contact = () => {
    return (
        <div>
            <img src={cat} className={cons.img}/>
            <p>For any inquiry, please contact me via Github.</p>
        </div>
    )
}

export default Contact