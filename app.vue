<template>
  <div>
    <app-header />
    <prefecture-selection
      :prefectures="prefectureList"
      :update_selected_prefectures="getUpdatePrefecture"
    />
    <prefecture-chart
      :key="update_count_key"
      :prefectures_data="selectedPrefecturesData"
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

  interface SelectedPrefectureDataType {
    name: string
    prefCode: number
    startYear: number
    data: number[]
  }

  const prefectureList = ref<Prefecture[]>([])
  const update_count_key = ref(0)
  const selectedPrefecturesData = ref<SelectedPrefectureDataType[]>([])

  onMounted(async () => {
    const res_prefectureList = await axios.get(`/api/getPrefectureList`)
    prefectureList.value = res_prefectureList.data
  })

  const getUpdatePrefecture: UpdatePrefectureFuctionType = ({
    type,
    prefCode,
    prefName,
  }) => {
    if (type === 'add') {
      const getURL = `/api/getPrefecturePopulation?prefCode=${prefCode}`

      axios
        .get(getURL)
        .then((data) => {
          const addPrefecture: SelectedPrefectureDataType = {
            name: prefName,
            prefCode: prefCode,
            startYear: data.data[0].year,
            data: data.data.map((v: { value: number }) => v.value),
          }
          selectedPrefecturesData.value.push(addPrefecture)
          updateChart()
        })
        .catch((err) => {
          throw new Error(err)
        })
      return
    }
    if (type === 'delete') {
      selectedPrefecturesData.value = selectedPrefecturesData.value.filter(
        (prefecture) => prefecture.prefCode !== prefCode
      )
      updateChart()
      return
    }
  }

  /**
   * 強制的にチャートコンポーネントを再描画
   */
  const updateChart = () => {
    update_count_key.value += 1
  }
</script>
