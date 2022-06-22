import type { Prefecture } from '../types/Prefectures'

export const getPrefNameByCode = (
  prefCode: number,
  prefectureList: Prefecture[]
) => {
  const targetPrefecture = prefectureList.find(
    (prefecture) => prefecture.prefCode === prefCode
  )
  if (!targetPrefecture) {
    throw new Error('getPrefNameByCode: 対象の都道府県情報がありません')
  }
  return targetPrefecture.prefName
}
