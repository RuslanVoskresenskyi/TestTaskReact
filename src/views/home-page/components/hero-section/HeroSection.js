import { AnchorLink } from 'components'

import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Test assignment for front-end developer</h2>
        <p className={styles.text}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        <AnchorLink link='#to-form' text='Sign up'/>
      </div>
    </div>
  )
}

export default HeroSection