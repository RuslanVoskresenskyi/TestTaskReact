import { getResource } from './index'
import { getToken } from './tokenApi'

export const getAllUsers = async (page = 1) => {
  return await getResource(
    `${process.env.REACT_APP_API_BASE}users?page=${page}&count=6`
  )
}

export const postUser = async (body) => {
  const token = await getToken()

  return await getResource(
    `${process.env.REACT_APP_API_BASE}users`,
    'POST',
    body,
    {
      'Token': `${token.token}`
    }
  )
}