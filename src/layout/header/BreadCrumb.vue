<template>
  <el-breadcrumb class="bred" separator="/">
    <el-breadcrumb-item v-for="(item, index) in tabs" :key="index">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from 'vue'
import { useRoute, RouteLocationMatched } from 'vue-router'
const route = useRoute()

const tabs: Ref<RouteLocationMatched[]> = ref([])

const getBredcrumb = () => {
  let mached = route.matched.filter((item) => item.meta && item.meta.title)

  const first = mached[0]

  if (first.path !== '/dashboard') {
    mached = [{ path: '/dashboard', meta: { title: '首页' } } as any].concat(
      mached
    )
  }
  tabs.value = mached
}
getBredcrumb()

watch(
  () => route.path,
  () => getBredcrumb()
)
</script>

<style scoped lang="scss">
.bred {
  margin-left: 20px;
}

:deep(.el-breadcrumb__inner) {
  color: #fff !important;
}

:deep(.el-breadcrumb__innera) {
  color: #fff !important;
}

:deep(.el-breadcrumb__item) {
  font-size: 16px !important;
}
</style>
