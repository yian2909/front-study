<template>
    <div>
        <h2>
            {{ userName }}
        </h2>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const userName = ref<String>('张三')
console.log(userName.value)
</script>
