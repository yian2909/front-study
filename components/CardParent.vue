<template>
    <div>
        <Card>
            <template #header>
                <p>
                    我来组成头部
                </p>
            </template>
            <p>这是中间的1111111</p>
            <template #footer>
                <p>
                    我来组成底部
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<style scoped>

</style>