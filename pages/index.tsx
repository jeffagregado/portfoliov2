import { Container } from '../components/Container'
import sectionStyle from '../styles/Section.module.scss'

export default function Home() {
  return (
    <>
      <Container className={sectionStyle.sectHome}>
        <div className={sectionStyle['sectHome-hero']}>
          <h1>Front-End Web Developer</h1>
          <p>Creating clean and simple website. Coding with passion</p>
        </div>
      </Container>

      <div className={sectionStyle.sectIntro}>
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
      </div>
    </>
  )
}
