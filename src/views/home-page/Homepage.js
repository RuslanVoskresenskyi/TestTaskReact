import { Header } from 'components'

import { HeroSection, UserForm, UserList } from './components'
import  styles from './Homepage.module.scss'

const Homepage = () => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <HeroSection/>
        <UserList/>
        <UserForm/>
      </div>
    </>
  )
}

export default Homepage