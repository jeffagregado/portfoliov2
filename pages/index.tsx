import { Card } from '../components/Card'
import { Container } from '../components/Container'
import sectionStyle from '../styles/Section.module.scss'
import Button from '../components/Button'
import cardStyle from '../styles/Card.module.scss'

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
      name: 'One-page App',
      alt: 'one-page-app',
      desc: 'To practice my skills without using bootstrap',
      link: 'https://one-page-app.netlify.app/',
      img: '/one-page-app.PNG',
    },
    {
      id: 0,
      name: 'One-page App',
      alt: 'one-page-app',
      desc: 'To practice my skills without using bootstrap',
      link: 'https://one-page-app.netlify.app/',
      img: '/one-page-app.PNG',
    },
  ]
  return (
    <>
      <Container className={`${sectionStyle.section} ${sectionStyle.sectHome}`}>
        <section className={sectionStyle['sectHome-hero']}>
          <h1>Front-End Web Developer</h1>
          <p>Creating clean and simple website. Coding with passion</p>
          <Button href="https://1drv.ms/b/s!AsjTvQE1H1sciZRqfTWUy5U3JnTsng?e=l3fMNh">
            My Resume
          </Button>
        </section>
      </Container>

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
                  <li>Github</li>
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
    </>
  )
}
