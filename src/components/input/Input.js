import { useField } from 'formik'

import styles from './Input.module.scss'

const Input = ({
  placeholder = '',
  radioName = '',
  example = '',
  ...props
}) => {
  const [field, meta] = useField(props)
  const marginBottom = props.type !== 'radio' ? { marginBottom: '50px' } : { marginBottom: '13px' }
  const inputWidth = props.type !== 'radio' ? { width: '370px' } : { width: '20px', height: '20px' }

  return (
    <div style={marginBottom} className={styles.container}>
      <div className={styles.radio_block}>
        <input
          style={inputWidth}
          className={styles.input}
          {...field}
          {...props}
          placeholder={placeholder}
        />
        <p className={styles.radio_name}>{radioName}</p>
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : (<div className={styles.example}>{example}</div>)}
    </div>
  )
}

export default Input