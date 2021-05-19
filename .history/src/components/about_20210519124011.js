
import Nav from './nav'
import profs from '../styles/about.module.scss'
import img from '../images/profile.JPG'
import Link from './links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faRedux } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className={profs.container}>
            <img src={img} className={profs.profimg} />
            <h3>Yuriko Darragh</h3>
            <Link />
            <div className={profs.title}>Profile</div>
            <span>Tokyo based full-stack developper.</span>
            <div className={profs.title}>Skill Stacks</div>
            <span><FontAwesomeIcon icon={faReact} /></span>
            <span><FontAwesomeIcon icon={faRedux} /></span>
        </div>
    )
}

export default About