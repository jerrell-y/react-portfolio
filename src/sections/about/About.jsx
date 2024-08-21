import AboutImage from '../../assets/1.jpg'
import CV from '../../assets/jerrellyeoh_resume.pdf'
import { HiDownload } from "react-icons/hi";
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards"></div>
          <p>
            Hello world
          </p>
          <p>
            Hello world
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About