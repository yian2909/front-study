<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <label>收件人邮箱</label>
            <input type="email" placeholder="请输入收件人邮箱" v-model="form.to">
            </div>
            <div>
                <label>邮件主题</label>
            <input type="text" placeholder="请输入邮件主题" v-model="form.subject">
            </div>
            <div>
                <label>邮件内容</label>
            <input type="text" placeholder="请输入邮件内容" v-model="form.content">
            </div>
            <button type="submit">发送</button>
            <!-- <el-button type="success" @click="submitForm">发送</el-button> -->
        </form>
    </div>
    
</template>

<script setup lang="ts">
import { reactive } from 'vue'


const form = reactive({
    to:"",
    subject:"",
    content:"",
});

const emit = defineEmits<{'submit-form':[any]}>()

const submitForm = () => {
    emit('submit-form',form)
}
</script>

<style scoped>

</style>