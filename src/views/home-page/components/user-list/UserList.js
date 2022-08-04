import { useEffect, useState } from 'react'

import { UserItem } from '../index'
import { useAsync } from 'hooks/useAsync'
import { getAllUsers } from 'services/userApi'
import { ErrorMessage } from 'components'

import styles from './UserList.module.scss'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [userPage, setUserPage] = useState(1)
  const [maxUserPage, setMaxUserPage] = useState(0)
  const { execute, value, status } = useAsync(getAllUsers)

  useEffect(() => {
    execute(userPage)
  },[userPage])

  useEffect(() => {
    if (value){
      const newSortedUsers = [...users, ...value.users].sort(
        (user1, user2) => user2.registration_timestamp - user1.registration_timestamp
      )

      setUsers(newSortedUsers)
      setMaxUserPage(value.total_pages)
    }
  }, [value])

  const renderUserList = () => {
    if (status === 'error') return <ErrorMessage/>
    if (users) return (
      <>
        {users.map(user => {
          return (
            <UserItem
              key={user.id}
              avatar={user.photo}
              name={user.name}
              email={user.email}
              phone={user.phone}
              position={user.position}
            />
          )
        } )}
      </>
    )
  }

  return (
    <div id='to-users' className={styles.container}>
      <h2 className={styles.title}>Working with GET request</h2>
      <div className={styles.list}>
        {renderUserList()}
      </div>
      <button
        disabled={userPage >= maxUserPage}
        onClick={() => setUserPage(userPage + 1)}
        className={styles.pagination}
      >
        {status === 'pending' ? 'Loading' : 'Show more'}
      </button>
    </div>
  )


}

export default UserList