
import Nav from './nav'
import profs from '../styles/about.module.scss'
import img from '../images/profile.JPG'
import Link from './links'

const About = () => {
    return (
        <div className={profs.container}>
            <img src={img} className={profs.profimg} />
            <h3>Yuriko Darragh</h3>
            <Link />
            <div className={profs.title}>Profile</div>
            <span>Tokyo based full-stack developper.</span>
            <div className={profs.title}>Skill Stacks</div>
            <div className={profs.title}>Experiences</div>
            <div className={profs.title}>What I like</div>
        </div>
    )
}

export default About