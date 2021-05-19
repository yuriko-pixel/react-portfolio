
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
                <img src="https://img.icons8.com/color/48/000000/oracle-logo.png"/>
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
                <div className={profs.title}>Experiences</div>
                <div className={profs.flex}>
                    <div className={profs.box2}>
                        <span>Current:</span>
                        <span>2017: </span>
                        <span>2016: </span>
                        <span>2014: </span>
                    </div>
                    <div className={profs.borderline}></div>
                    <div>
                        <p>Zenith as a system consultant</p>
                        <p>Barclays Securities</p>
                        <p>Mitsubishi UFJ Morgan Stanley Securities</p>
                        <p>Sophia University</p>
                        <p></p>
                    </div>
                </div>
                <div className={profs.title}>What I like</div>
                <div className={profs.flex}>
                    <img src="https://img.icons8.com/color/48/000000/harry-potter-.png"/> :
                    <span>Harry Potter</span>
                </div>
                <div className={profs.flex}>
                    <img src="https://img.icons8.com/color/48/000000/airplane-take-off--v1.png"/>
                    <span>Traveling</span>
                </div>
                <div className={profs.flex}>
                    <img src="https://img.icons8.com/color/48/000000/bird-above.png"/>
                    <span>Cat</span>
                </div>
                <div className={profs.flex}>
                    <img src="https://img.icons8.com/color/48/000000/reading-unicorn.png"/>
                    <span>Reading</span>
                </div>
            </div>
        </div>
    )
}

export default About