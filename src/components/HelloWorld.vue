<script>
import one from '../page/one.vue';
import { computed, onBeforeMount,onMounted, ref, toRefs, watch ,nextTick,reactive} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore,mapState } from 'vuex';
// import axios from '../utilsApi/axios';


export default {
 components: {one},
  props: {
    msg: String
  },
 
  setup(props,{emit}) {
   

    const { msg } = toRefs(props)
    const count = ref(0)
    let name = "李明"
    let name2 = "李海"
    let age = ref(18)
    let age2 = ref(18)
function Addage(){
  age.value++
}
    function MyClick(v) {
      console.log(v, "hdkghaskgjhakgjhkd")
    }
    // 监听
    watch(age, (xin, jiu) => {
      console.log(xin, jiu)
    })
     // 声明路由  和路由跳转
    const router = useRouter()
    const route = useRoute()
    let okName = computed(() => {
      return `${name}和${name2}一共${age.value + age2.value}`

    })
    function linkto() {
      console.log(router)
      router.push({path:"/hh",query:{name:"liming"}})
    }
    // 使用vuex
     const store = useStore()//声明store
     let us=computed(()=>{
     
       return store.state.us
     })
     let usNum=computed(()=>{
       return store.getters.uss
     })
    let change1=()=>{
    store.commit("change")
     }
     let change2=()=>{
    store.dispatch("change")
     }
    //获取子组件的值
     let queOne=ref(null)
nextTick(()=>{
 
  console.log(queOne.value.gaiimg())
})
// 发送请求
// axios.get('/users/XPoet').then((res)=>{
//   console.log(res)
// })
    return { name, name2, age, age2, msg, MyClick, okName, linkto ,us,change1,usNum,change2,queOne,Addage}
  }

}



</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>Vuex中sdate中的{{us}}</h2>
  <h2>Vuex中gies中的{{usNum}}</h2>
  <button @click="change1" type="button">改变vuex</button>
    <button @click="change2" type="button">改变vuex</button>
  <h2>我的名字叫{{ name }},我今年{{ age }}</h2>
  <h2>我的名字叫{{ name2 }},我今年{{ age2 }}</h2>
  <h3>{{ okName }}</h3>
  <button type="button" @click="Addage">增加年龄</button>
  <one @MyClick="MyClick" :msg="`我今年${age}`" ref="queOne"></one>
  <h2 @click="linkto">跳转路由</h2>
  <router-view></router-view>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
