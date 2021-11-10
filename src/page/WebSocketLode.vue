<template>
    <el-form-item label="账号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.pass"></el-input>
    </el-form-item>
</template>
<script>
import { ref,reactive } from "vue"
export default{
    setup(){
let form=reactive({name:"hkj",pass:"1222"})
return{form}
    }
    
}
</script>
<style>

</style>