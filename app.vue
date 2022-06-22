<template>
  <div>
    <div>Index</div>
    <prefecture-selection-checkboxes
      :prefectures="test_prefectures"
      :update_selected_prefectures="update_func"
    />
    <button @click="adddata">adddata</button>
    <prefecture-chart
      :key="update_count_key"
      :prefectures_data="prefectures_data"
    />
  </div>
</template>

<script setup lang="ts">
  import PrefectureSelectionCheckboxes from './components/PrefectureSelectionCheckboxes.vue'
  import PrefectureChart from './components/PrefectureChart.vue'

  import type {
    Prefectures,
    UpdateSelectedPrefectures,
  } from './types/Prefectures'
  const test_prefectures: Prefectures = ['aaa', 'bbb', 'ccc']
  const update_func: UpdateSelectedPrefectures = (
    selected_prefectures: Prefectures
  ) => {
    console.warn(selected_prefectures)

  import { ref } from 'vue'
  const update_count_key = ref(0)
  const prefectures_data = ref<Array<{ name: string; data: number[] }>>([
    {
      name: '都道府県名1',
      data: [
        12817, 12707, 12571, 12602, 12199, 11518, 10888, 10133, 9275, 8431,
        7610, 6816, 6048, 5324,
      ],
    },
    {
      name: '都道府県名2',
      data: [111, 222, 333, 444, 555, 666, 777, 888, 999, 10000],
    },
  ])

  const adddata = () => {
    const add_prefecture = {
      name: '都道府県名3',
      data: [111, 222, 333, 444, 555, 666, 777, 888, 999, 10000],
    }
    prefectures_data.value.push(add_prefecture)
    // 強制的にチャートコンポーネントを再描画
    update_count_key.value += 1
  }
</script>
