import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTestStore = defineStore('testStore', () => {
  const count = ref(0)
  const msg = ref('hello')

  const getCount = computed(() => count.value)

  const setCount = (newCount: number) => {
    console.log(newCount)
    count.value = newCount
  }

  return { count, msg, getCount, setCount }
})
