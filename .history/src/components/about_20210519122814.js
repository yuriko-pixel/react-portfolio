
import Nav from './nav'
import profs from '../styles/about.module.scss'
import img from '../images/profile.JPG'

const About = () => {
    return (
        <div>
            <img src={img} className={profs.profimg} />
        </div>
    )
}

export default About