import { getResource } from './index'

export const getToken = async () => {
  return await getResource(
    `${process.env.REACT_APP_API_BASE}token`
  )
}