import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMenuStore = defineStore('menuStore', () => {
  const collapse = ref(false)

  const getCollapse = computed(() => collapse.value)

  const setCollapse = (newCollapse: boolean) => {
    collapse.value = newCollapse
  }

  return { collapse, getCollapse, setCollapse }
})
