import { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { useAsync } from 'hooks/useAsync'
import { getPositions } from 'services/positionApi'
import { postUser } from 'services/userApi'
import { Input } from 'components'
import { phoneRegExp } from 'constants/regex'

import styles from './UserForm.module.scss'

const UserForm = () => {
  const [fileName, setFileName] = useState()
  const [positions, setPositions] = useState([])
  const { execute, value } = useAsync(getPositions)

  const initialValue = {
    name: '',
    email: '',
    phone: '',
    position_id: '',
    photo: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .max(60, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
    position_id: Yup.string().required('Required'),
  })
  const handleSubmit = (values) => {
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('phone', values.phone)
    formData.append('position_id', Number(values.position_id))
    formData.append('photo', values.file)

    postUser(formData)
      .then(console.log)
      .catch(console.log)
  }

  useEffect(() => {
    execute()
  },[])

  useEffect(() => {
    if (value){
      setPositions(value.positions)
    }
  }, [value])

  return (
    <div id='to-form' className={styles.container}>
      <h2 className={styles.title}>Working with POST request</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <Input name='name' type='text' placeholder='Your name'/>
            <Input name='email' type='email' placeholder='Email'/>
            <Input name='phone' type='tel' placeholder='Phone' example='+38 (XXX) XXX - XX - XX' />
            <h3 className={styles.radio_title}>Select your position</h3>
            {positions.length > 0 && positions.map(position => {
              return (
                <Input
                  key={position.id}
                  name='position_id'
                  type='radio'
                  value={`${position.id}`}
                  radioName={position.name}
                />
              )
            })}
            <div className={styles.input_file_container}>
              <label className={styles.input_file} htmlFor='file'>
                <div className={styles.input_file__left}>Upload</div>
                <div className={styles.input_file__right}>{fileName ? fileName : 'Upload your photo'}</div>
              </label>
              <input
                id='file'
                name='file'
                type='file'
                className={styles.disable}
                onChange={(event) => {
                  setFieldValue('file', event.currentTarget.files[0])
                  setFileName(event.currentTarget.files[0].name)
                }}
              />
            </div>
            <button className={styles.submit}  type='submit' disabled={isSubmitting}>
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserForm