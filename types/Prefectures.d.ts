export type Prefecture = {
  prefCode: number
  prefName: string
}
export type UpdateSelectedPrefectures = {
  // eslint-disable-next-line no-unused-vars
  (selected_prefectures: Prefecture[]): void
}
