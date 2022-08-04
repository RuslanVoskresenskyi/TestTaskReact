import styles from './UserItem.module.scss'

const UserItem = ({ avatar, name, position, email, phone }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={avatar} alt='avatar'/>
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.phone}>{phone}</p>
    </div>
  )
}

export default UserItem