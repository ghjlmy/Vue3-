<template>
    <h1>{{ my }}</h1>
   
    
</template>
<script>
import { ref, toRefs} from "vue"
export default {
    
   
    setup(props,{emit}) {
       
        let my = "two"
        return { my}
    }
}
</script>

<style lang="less">

</style>