import { Card } from '../components/Card'
import { Container } from '../components/Container'
import sectionStyle from '../styles/Section.module.scss'
import Button from '../components/Button'
import cardStyle from '../styles/Card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import {
  faTwitterSquare,
  faLinkedinIn,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' */

type projectsType = {
  id: number
  name: string
  alt: string
  desc: string
  link: string
  img: string
}

export default function Home() {
  const projects: projectsType[] = [
    {
      id: 0,
      name: 'One-page App',
      alt: 'one-page-app',
      desc: 'My project to practice my skills without using bootstrap',
      link: 'https://one-page-app.netlify.app/',
      img: '/one-page-app.PNG',
    },
    {
      id: 0,
      name: 'Unofficial Hololive Chart/Rank',
      alt: 'holo-chart',
      desc: '',
      link: 'https://hololive-chart.netlify.app/',
      img: '/holochart.PNG',
    },
  ]
  return (
    <>
      {/* Hero */}
      <Container className={`${sectionStyle.section} ${sectionStyle.sectHome}`}>
        <section className={sectionStyle['sectHome-hero']}>
          <h1>Front-End Web Developer</h1>
          <p>Creating clean and simple website. Coding with passion</p>
          <Button href="https://1drv.ms/b/s!AsjTvQE1H1sciZRqfTWUy5U3JnTsng?e=l3fMNh">
            My Resume
          </Button>
        </section>
      </Container>

      {/* Intro */}
      <section className={`${sectionStyle.section} ${sectionStyle.sectIntro}`}>
        <Container className={sectionStyle['sectIntro-intro']}>
          <div>
            <h1>Jeffrey Andrew Agregado</h1>
            <p>
              I am a career shifter who would like to work in web development. I
              have been studying diligently and created several personal
              projects to improve my skills. One of my goals is to land a
              front-end developer jobs or any junior position that I can put my
              skills to use.
            </p>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section
        id="skills"
        className={`${sectionStyle.section} ${sectionStyle.sectSkills}`}
      >
        <Container>
          <div className={`${sectionStyle.skills}`}>
            <Card className="card-skills">
              <div>
                <h1>Techincal Languages</h1>
                <ul>
                  <li>HTML/5</li>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>Javascript / ES6</li>
                  <li>ReactJs</li>
                </ul>
              </div>
            </Card>
            <Card className="card-skills">
              <div>
                <h1>Dev Tools / Frameworks</h1>
                <ul>
                  <li>Git/Github</li>
                  <li>Next.Js</li>
                  <li>Netlify</li>
                  <li>VS Code</li>
                  <li>Firebase</li>
                  <li>Contentful</li>
                </ul>
              </div>
            </Card>
            <Card className="card-skills">
              <div>
                <h1>Design Tools</h1>
                <ul>
                  <li>Photoshop</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>Material UI</li>
                </ul>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`${sectionStyle.section} ${sectionStyle.sectWorks}`}
      >
        <Container>
          <div className={sectionStyle['sectWorks-title']}>
            <h1>My Recent Work</h1>
            <sub>Below are my few projects I've been working recently</sub>
          </div>
          <div className={sectionStyle['sectWorks-list']}>
            {projects.map((project) => (
              <Card key={project.id} className="card-works">
                <a href={project.link} target="_blank">
                  <div className={cardStyle['card-img']}>
                    <img src={project.img} alt={project.alt} />
                  </div>
                  <div className={cardStyle['card-info']}>
                    <h2>{project.name}</h2>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* External */}
      <footer
        className={`${sectionStyle.section} ${sectionStyle['section-external']}`}
      >
        <Container>
          <div className={sectionStyle['external-info']}>
            <h2>Live to learn, learn to live.</h2>
            <h2>Enjoy coding!</h2>
            <div className={sectionStyle['external-lists']}>
              <a
                href="https://www.linkedin.com/in/jeffrey-andrew-agregado-77311760/"
                className={sectionStyle['external-icon']}
              >
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
              </a>
              <a
                href="https://github.com/jeffagregado"
                className={sectionStyle['external-icon']}
              >
                <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
              </a>
              <a
                href="mailto: jeff.agregado@outlook.com"
                className={sectionStyle['external-icon']}
              >
                <FontAwesomeIcon icon={['fas', 'envelope']} size="2x" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
