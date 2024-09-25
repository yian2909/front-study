<template>
    <div>
        <p>姓名: {{ name }}</p>
        <p>称号: {{ title }}</p>
        <p>简介: {{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const name = ref<string>('孙悟空')
const title = ref<string>('齐天大圣')
const description = ref<string>('来自花果山')
</script>

<style scoped>
    p{
        color: red;
    }
</style>