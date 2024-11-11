<template>
  <el-icon @click="setCollapse" style="cursor: pointer" color="#FFF" size="30">
    <component :is="status ? Fold : Expand"></component>
  </el-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import { useMenuStore } from '@/store/menu/index'

const store = useMenuStore()

const status = computed(() => {
  return !store.getCollapse
})

const setCollapse = () => {
  store.setCollapse(!store.getCollapse)
}
</script>
