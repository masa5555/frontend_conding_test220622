<template>
  <div>
    <app-header />
    <prefecture-selection
      :prefectures="prefectureList"
      :update_selected_prefectures="getUpdatePrefecture"
    />
    <button @click="adddata">adddata</button>
    <prefecture-chart
      :key="update_count_key"
      :prefectures_data="prefectures_data"
    />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import axios from 'axios'

  import AppHeader from './components/AppHeader.vue'
  import PrefectureSelection from './components/PrefectureSelection.vue'
  import PrefectureChart from './components/PrefectureChart.vue'

  import type {
    Prefecture,
    UpdatePrefectureFuctionType,
  } from './types/Prefectures'

  const prefectureList = ref<Prefecture[]>([])
  const update_count_key = ref(0)

  onMounted(async () => {
    const res_prefectureList = await axios.get(`/api/getPrefectureList`)
    prefectureList.value = res_prefectureList.data

    // const res2 = await axios.get(`/api/getPrefecturePopulation?prefCode=${20}`)
    // console.warn(res2)
  })

  const getUpdatePrefecture: UpdatePrefectureFuctionType = (
    update_prefecture
  ) => {
    console.warn(update_prefecture)
  }

  interface SelectedPrefectureDataType {
    prefName: string
    prefCode: number
    data: number[]
  }

  const prefectures_data = ref<SelectedPrefectureDataType[]>([
    {
      prefName: '都道府県名1',
      prefCode: 0,
      data: [
        12817, 12707, 12571, 12602, 12199, 11518, 10888, 10133, 9275, 8431,
        7610, 6816, 6048, 5324,
      ],
    },
    {
      prefName: '都道府県名2',
      prefCode: 1,
      data: [111, 222, 333, 444, 555, 666, 777, 888, 999, 10000],
    },
  ])

  const adddata = () => {
    const add_prefecture: SelectedPrefectureDataType = {
      prefName: '都道府県名3',
      prefCode: 2,
      data: [111, 222, 333, 444, 555, 666, 777, 888, 999, 10000],
    }
    prefectures_data.value.push(add_prefecture)
    // 強制的にチャートコンポーネントを再描画
    update_count_key.value += 1
  }
</script>
