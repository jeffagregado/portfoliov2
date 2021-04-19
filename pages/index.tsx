import { Card } from '../components/Card'
import { Container } from '../components/Container'
import sectionStyle from '../styles/Section.module.scss'
import Button from '../components/Button'

export default function Home() {
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
              Since beginning my journey as a freelance designer nearly 10 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
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
            <Card>
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
            <Card>
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
            <Card>
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

      <section>
        <Container>
          <div>
            <h1>My Recent Work</h1>
            <sub>Below are my few projects I've been working recently</sub>
          </div>
        </Container>
      </section>
    </>
  )
}
