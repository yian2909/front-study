<template>
    <div>
        <button :disabled="isDisabled"isDisabled>点击</button>npv
        <img :scr="url" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isDisabled = ref<boolean>(false)
const url = ref<string>('https://cn.bing.com/images/search?q=%E5%9B%BE%E7%89%87&FORM=IQFRBA&id=76B68688606E410A5B3D9FC16B7E2923304153F1')
console.log(url.value)
</script>

