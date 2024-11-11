import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Tab = {
  title: string
  path: string
}

export type TabState = {
  tabList: Tab[]
}

export const useTabStore = defineStore('tabStore', () => {
  const tabList = ref<Tab[]>([])

  const getTab = computed(() => tabList.value)

  const addTab = (tab: Tab) => {
    if (tabList.value.some((item) => item.path === tab.path)) return
    tabList.value.push(tab)
  }

  return { tabList, getTab, addTab }
})
