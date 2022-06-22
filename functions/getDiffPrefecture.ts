import type { getDiffPrefectureType } from '../types/Prefectures'

export const getDiffPrefecture: getDiffPrefectureType = ({
  newChecked,
  oldChecked,
}) => {
  if (newChecked.length > oldChecked.length) {
    const addPrefCode = newChecked.at(-1)
    if (!addPrefCode) {
      throw new Error(`リロードしてください`)
    }
    return {
      type: 'add',
      prefCode: addPrefCode,
    }
  } else if (newChecked.length < oldChecked.length) {
    const deletePrefCode = oldChecked.find(
      (prefCode) => !newChecked.includes(prefCode)
    )
    console.warn(deletePrefCode)
    if (!deletePrefCode) {
      throw new Error(`リロードしてください`)
    }
    return {
      type: 'delete',
      prefCode: deletePrefCode,
    }
  } else {
    throw new Error('リロードしてください')
  }
}
