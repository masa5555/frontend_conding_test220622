export type Prefecture = {
  prefCode: number
  prefName: string
}

// updatePrefecture
export interface UpdatePrefectureType extends getDiffPrefectureReturnType {
  prefName: string
}
export type UpdatePrefectureFuctionType = {
  // eslint-disable-next-line no-unused-vars
  (updatePrefecture: UpdatePrefectureType): void
}

export type PrefecturePopulationResponseType = {
  prefCode: number
  data: number[]
}

// getDiffPrefecture
export type getDiffPrefectureReturnType = {
  type: 'add' | 'delete'
  prefCode: number
}
export type getDiffPrefecturePramType = {
  newChecked: number[]
  oldChecked: number[]
}
export type getDiffPrefectureType = (
  // eslint-disable-next-line no-unused-vars
  { newChecked, oldChecked }: getDiffPrefecturePramType
) => getDiffPrefectureReturnType
