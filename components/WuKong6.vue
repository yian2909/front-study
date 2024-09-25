<template>
    <h1>装备管理</h1>
    <div>
        <input type="text" v-model="newgear.name" placeholder="请输入装备名称" />
        <button @click="addGear" type="submit">添加装备</button>
    </div>
    <div>
        <li v-for="gear in gears">
            {{ gear.name }}
            <button @click="deleteGear(newgear.id)">删除装备</button>
        </li>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Gear {
    id:number
    name:string
}

const newgear = ref<Gear>({id:0,name:''})
const gears = ref<Gear[]>([])

const addGear = () =>{
    if(newgear.value.name.trim()){
        newgear.value.id = gears.value.length +1
        gears.value.push(newgear.value)
        newgear.value = {id:0,name:''}
    }
}
const deleteGear = (id:number) =>{
    gears.value.splice(id,1)
}
</script>

<style scoped>
    input{
        padding: 8px;
    }
</style>