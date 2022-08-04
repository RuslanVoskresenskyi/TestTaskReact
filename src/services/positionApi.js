import { getResource } from './index'

export const getPositions = async () => {
  return await getResource(
    `${process.env.REACT_APP_API_BASE}positions`
  )
}