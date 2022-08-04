import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
  return (
    <div className={styles.error_message}>
      Oops... something went wrong
    </div>
  )
}

export default ErrorMessage