import { AnchorLink } from 'components'

import logo from 'assets/header/logo.svg'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt='logo' />
        <div className={styles.nav}>
          <AnchorLink link='#to-users' text='Users'/>
          <AnchorLink link='#to-form' text='Sign up'/>
        </div>
      </div>
    </div>
  )
}

export default Header