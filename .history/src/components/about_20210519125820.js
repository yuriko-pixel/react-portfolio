
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
            <div className={profs.box}>
                <div className={profs.title}>Profile</div>
                <span>Tokyo based full-stack developper.</span>
                <div className={profs.title}>Skill Stacks</div>
                <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                <img src="https://img.icons8.com/color/48/000000/redux.png"/>
                <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/>
                <div className={profs.title}>Experiences</div>
                <div className={profs.title}>What I like</div>
            </div>
        </div>
    )
}

export default About