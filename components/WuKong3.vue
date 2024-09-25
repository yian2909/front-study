<template>
    <div>
        <li v-for="skill in skills" :key="skill.id">
            {{ skill.name }} - 
            <span id="green" v-if="skill.locked">已解锁</span>
            <span id="red" v-else>未解锁</span>
        </li>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill{
    id:number
    name:string
    locked:boolean
}

const skills = ref<Skill[]>([
    {id:1,name:'七十二变',locked:true},
    {id:2,name:'筋斗云',locked:false},
    {id:3,name:'火眼金睛',locked:false},
])

</script>

<style scoped>
    #green{
        color: green;
    }

    #red{
        color: red;
    }
</style>
