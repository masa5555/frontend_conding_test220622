<template>
  <div>
    <div>Index</div>
    <prefecture-selection-checkboxes
      :prefectures="test_prefectures"
      :update_selected_prefectures="update_func"
    />
  </div>
</template>

<script setup lang="ts">
  import PrefectureSelectionCheckboxes from './components/PrefectureSelectionCheckboxes.vue'

  import type {
    Prefectures,
    UpdateSelectedPrefectures,
  } from './types/Prefectures'
  const test_prefectures: Prefectures = ['aaa', 'bbb', 'ccc']
  const update_func: UpdateSelectedPrefectures = (
    selected_prefectures: Prefectures
  ) => {
    console.warn(selected_prefectures)
  }
</script>
