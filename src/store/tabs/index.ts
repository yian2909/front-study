import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Tab = {
  title: string
  path: string
}

export type TabState = {
  tabList: Tab[]
}

export const useTabStore = defineStore(
  'tabStore',
  () => {
    const tabList = ref<Tab[]>([])

    const getTab = computed(() => tabList.value)

    const addTab = (tab: Tab) => {
      if (tabList.value.some((item) => item.path === tab.path)) return
      if (tab.path == '/dashboard') {
        tabList.value.unshift(tab)
      } else {
        tabList.value.push(tab)
      }
    }

    return { tabList, getTab, addTab }
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'tabStore',
          storage: localStorage
        }
      ]
    }
  }
)
