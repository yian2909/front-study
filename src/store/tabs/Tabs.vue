<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
    @tab-click="clickBtn"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { Tab, useTabStore } from '@/store/tabs/index'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { TabsPaneContext } from 'element-plus'
const router = useRouter()
const route = useRoute()
const store = useTabStore()

const activeTab = ref('')

const tabsList = computed(() => {
  return store.getTab
})

const clickBtn = (pane: TabsPaneContext) => {
  console.log(pane)
  const { props } = pane

  router.push({ path: props.name as string })
}

const removeTab = (targetName: string) => {
  const tabs = tabsList.value
  let activeName = activeTab.value
  if (activeName === targetName) {
    tabs.forEach((tab: Tab, index: number) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }

  activeTab.value = activeName

  store.tabList = tabs.filter((tab: Tab) => tab.path !== targetName)

  router.push({ path: activeName })
}
const addTab = () => {
  const { path, meta } = route
  console.log(path)
  console.log(meta)
  const tab: Tab = {
    path: path,
    title: meta.title as string
  }
  store.addTab(tab)
}

watch(
  () => route.path,
  () => {
    setActiveTab()
    addTab()
  }
)

const setActiveTab = () => {
  activeTab.value = route.path
}
onMounted(() => {
  setActiveTab()
  addTab()
})
</script>

<style scoped lang="scss">
:deep(.el-tabs__header) {
  margin: 0px;
}

:deep(.el-tabs__item) {
  height: 26px !important;
  line-height: 26px !important;
  text-align: center !important;
  border: 1pxsolid#d8dce5 !important;
  margin: 0px3px !important;
  color: #495060;
  font-size: 12px !important;
  padding: 0xp10px !important;
}

:deep(.el-tabs__nav) {
  border: none !important;
}

:deep(.is-active) {
  border-bottom: 1pxsolidtransparent !important;
  border: 1pxsolid#42b983 !important;
  background-color: #42b983 !important;
  color: #fff !important;
}

:deep(.el-tabs__item:hover) {
  color: #495060 !important;
}

:deep(.is-active:hover) {
  color: #fff !important;
}

:deep(.el-tabs__nav-next) {
  line-height: 26px !important;
}

:deep(.el-tabs__nav-prev) {
  line-height: 26px !important;
}
</style>
