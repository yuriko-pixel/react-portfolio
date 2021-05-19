
import Nav from './nav'
import profs from '../styles/about.module.scss'
import img from '../images/profile.JPG'
import Link from './links'
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <div className={profs.container}>
            <img src={img} className={profs.profimg} />
            <h3>Yuriko Darragh</h3>
            <Link />
            <div className={profs.title}>Profile</div>
            <span>Tokyo based full-stack developper.</span>
            <div className={profs.title}>Skill Stacks</div>
            <span><FontAwesomeIcon icon={faReact} size={100}/></span>
        </div>
    )
}

export default About