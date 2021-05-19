
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
                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/redux.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/oracle-logo.png" alt="skills" />
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="skills" />
                <div className={profs.title}>Experiences</div>
                <div className={profs.flex}>
                    <div className={profs.box2}>
                        <p>Current:</p>
                        <p>2017: </p>
                        <p>2016: </p>
                        <p>2014: </p>
                    </div>
                    <div className={profs.borderline}></div>
                    <div className={profs.box3}>
                        <p>Zenith as a system consultant</p>
                        <p>Barclays Securities</p>
                        <p>Mitsubishi UFJ Morgan Stanley Securities</p>
                        <p>Sophia University</p>
                    </div>
                </div>
                <div className={profs.title}>What I like</div>
                <div className={profs.likes}>
                    <div className={profs.flex}>
                        <img src="https://img.icons8.com/color/48/000000/harry-potter-.png" alt="icon" />
                        <span className={profs.liketitle}>Harry Potter</span>
                    </div>
                    <div className={profs.flex}>
                        <img src="https://img.icons8.com/color/48/000000/airplane-take-off--v1.png" alt="icon" />
                        <span className={profs.liketitle}>Traveling</span>
                    </div>
                    <div className={profs.flex}>
                        <img src="https://img.icons8.com/color/48/000000/bird-above.png" alt="icon" />
                        <span className={profs.liketitle}>Cat</span>
                    </div>
                    <div className={profs.flex}>
                        <img src="https://img.icons8.com/color/48/000000/reading-unicorn.png" alt="icon" />
                        <span className={profs.liketitle}>Reading</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About