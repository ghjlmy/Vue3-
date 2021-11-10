<template>
    <h1>我是note的儿子</h1>
    <h1>{{props.name}}</h1>
    <input type="button" @click="trigger" value="触发父子组件事件">
   
</template>
<script setup>
const emit= defineEmits(["testEmit"])
const props=defineProps(["name"])
function trigger(){
    console.log(emit("testEmit"))
console.log("触发父组件")
}

</script>
<style lang="less">

</style>