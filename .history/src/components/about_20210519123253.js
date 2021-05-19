
import Nav from './nav'
import profs from '../styles/about.module.scss'
import img from '../images/profile.JPG'

const About = () => {
    return (
        <div className={profs.container}>
            <img src={img} className={profs.profimg} />
            <div>
                Yuriko Darragh
            </div>
        </div>
    )
}

export default About