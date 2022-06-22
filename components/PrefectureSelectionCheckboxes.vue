<template>
  <div class="prefecture-selection-checkboxes">
    <span
      v-for="(prefecture_name, index) in props.prefectures"
      :key="index"
      class="prefecture-selection-checkboxes-label"
    >
      <input
        :id="prefecture_name"
        v-model="selected_prefectures"
        type="checkbox"
        :value="prefecture_name"
      />
      <label :for="prefecture_name">{{ prefecture_name }}</label>
    </span>
    {{ selected_prefectures.length }}
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps, watch } from 'vue'
  import type {
    Prefectures,
    UpdateSelectedPrefectures,
  } from '../types/Prefectures'

  const selected_prefectures = ref<Prefectures>([])

  const props = defineProps<{
    prefectures: Prefectures
    // eslint-disable-next-line vue/prop-name-casing
    update_selected_prefectures: UpdateSelectedPrefectures
  }>()

  watch(selected_prefectures, (newChecked) => {
    props.update_selected_prefectures(newChecked)
  })
</script>

<style scoped>
  /* .prefecture-selection-checkboxes {
  } */

  .prefecture-selection-checkboxes-span {
    cursor: pointer;
  }
</style>
