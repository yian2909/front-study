<template>
    <div>
        <h2>当前形态：{{ title }}</h2>
        <button @click="changeTitle">切换形态</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref<string>('齐天大圣')

const changeTitle = () =>{
    title.value==='齐天大圣'? title.value='斗战胜佛':title.value='齐天大圣'
}
</script>

<style scoped>

</style>