<!-- <template>
  <div>
    <h1>Hello, Element Plus!</h1>
    <el-button type="primary" @click="handleClick">点击我</el-button>
    <div style="margin-top: 20px; font-size: 32px">
      <el-icon>
        <Plus />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const handleClick = () => {
  console.log('按钮被点击')
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style> -->

<template>
  <h1>{{ count }}</h1>
  <h2>{{ msg }}</h2>
  <el-button type="primary" size="default" @click="addBtn">新增</el-button>
  <el-icon>
    <search />
  </el-icon>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store/test/index'
import { storeToRefs } from 'pinia'

const store = useTestStore()
const { count, msg } = storeToRefs(store)

const addBtn = () => {
  // store.count++;

  // store.setCount(++store.count);

  // store.$patch({
  //   count: ++store.count,
  // });

  store.$patch((state) => {
    state.count = ++state.count
  })
}
</script>
