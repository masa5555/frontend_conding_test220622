<template>
  <div class="prefecture-selection">
    <div class="prefecture-selection-title">都道府県を選択</div>
    <prefecture-selection-checkboxes
      :prefectures="props.prefectures"
      :update_selected_prefectures="props.update_selected_prefectures"
    />
  </div>
</template>

<script setup lang="ts">
  import PrefectureSelectionCheckboxes from './PrefectureSelectionCheckboxes.vue'
  import type {
    Prefecture,
    UpdatePrefectureFuctionType,
  } from '../types/Prefectures'
  import { defineProps } from 'vue'

  const props = defineProps<{
    prefectures: Prefecture[]
    // eslint-disable-next-line vue/prop-name-casing
    update_selected_prefectures: UpdatePrefectureFuctionType
  }>()
</script>

<style scoped>
  .prefecture-selection {
    margin: 20px;
  }
  .prefecture-selection-title {
    user-select: none;
  }
</style>
