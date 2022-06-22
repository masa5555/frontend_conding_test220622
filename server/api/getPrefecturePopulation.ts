import axios from 'axios'
import { defineEventHandler, useQuery } from 'h3'

const { API_KEY } = process.env

const getPrefecturePopulation = defineEventHandler(async (event) => {
  if (API_KEY === undefined) {
    throw new Error(`API_KEY is required`)
  }
  const { prefCode } = useQuery(event)
  if (!prefCode) {
    throw new Error(`required prefCode`)
  }
  const cityCode = '-' // all of prefecture
  const { data } = await axios.get(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCpde=${cityCode}&prefCode=${prefCode}`,
    { headers: { 'X-API-KEY': API_KEY } }
  )

  return {
    prefCode,
    data: data.result.data[0].data, //総人口
  }
})

export default getPrefecturePopulation
