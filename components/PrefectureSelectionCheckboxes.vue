<template>
  <div class="prefecture-selection-checkboxes">
    <span
      v-for="(prefecture, index) in props.prefectures"
      :key="index"
      class="prefecture-selection-checkboxes-span"
    >
      <input
        :id="prefecture.prefName"
        v-model="selected_prefectures"
        type="checkbox"
        :value="prefecture.prefCode"
        class="prefecture-selection-checkboxes-span-checkbox"
      />
      <label
        class="prefecture-selection-checkboxes-span-label"
        :for="prefecture.prefName"
        >{{ prefecture.prefName }}</label
      >
    </span>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps, watch } from 'vue'
  import type {
    Prefecture,
    UpdatePrefectureType,
    UpdatePrefectureFuctionType,
  } from '../types/Prefectures'
  import { getDiffPrefecture } from '../functions/getDiffPrefecture'
  import { getPrefNameByCode } from '../functions/getProfNameByCode'

  const selected_prefectures = ref<number[]>([])

  const props = defineProps<{
    prefectures: Prefecture[]
    // eslint-disable-next-line vue/prop-name-casing
    update_selected_prefectures: UpdatePrefectureFuctionType
  }>()

  watch(selected_prefectures, (newChecked, oldChecked) => {
    const { type, prefCode } = getDiffPrefecture({ newChecked, oldChecked })
    const update_prefecture: UpdatePrefectureType = {
      type,
      prefCode,
      prefName: getPrefNameByCode(prefCode, props.prefectures),
    }
    props.update_selected_prefectures(update_prefecture)
  })
</script>

<style scoped>
  .prefecture-selection-checkboxes {
    border: 1px solid rgb(198, 190, 190);
  }

  .prefecture-selection-checkboxes-span {
    display: inline-block;
    margin: 5px;
  }
  .prefecture-selection-checkboxes-span-checkbox {
    cursor: pointer;
  }
  .prefecture-selection-checkboxes-span-label {
    margin-left: 3px;
    cursor: pointer;
    user-select: none;
  }
</style>
