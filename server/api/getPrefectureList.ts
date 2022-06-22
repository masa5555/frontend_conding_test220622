import axios from 'axios'
import { defineEventHandler } from 'h3'

const { API_KEY } = process.env

const getPrefectureList = defineEventHandler(async () => {
  if (API_KEY === undefined) {
    throw new Error(`API_KEY is required`)
  }
  const { data } = await axios.get(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    { headers: { 'X-API-KEY': API_KEY } }
  )

  return data.result
})

export default getPrefectureList
