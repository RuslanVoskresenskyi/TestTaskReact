import styles from './AnchorLink.module.scss'

const AnchorLink = ({ link, text }) => {
  return (
    <a className={styles.link} href={link}>
      {text}
    </a>
  )
}

export default AnchorLink