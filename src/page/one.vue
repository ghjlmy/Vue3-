<template>
    <h1>{{ my }}</h1>
    <p>传过来的{{ msg }}</p>
    <p>{{ luyou }}</p>
    <button @click="gaiimg(2)">改变图片</button>
    <button @click="huihua">回句话</button>
    <div class="ingboc">
        <img :src="imgurl" alt="加载失败" />
    </div>
</template>
<script>
import { ref, toRefs, watch, defineExpose } from "vue"
import change from "../components/HelloWorld.vue"
import { useRoute, useRouter } from "vue-router"
export default {
    emits: ['MyClick'],
    props: { msg: String },
    setup(props, { emit }) {
        // 声明路由
        const route = useRoute()
        const router = useRouter()
        let luyou = ref("暂无值")
        const { msg } = toRefs(props)
        let my = "one"

        let imgurl = ref(new URL('../assets/01.jpg', import.meta.url).href)
        console.log(imgurl)
        let gaiimg = (num) => {

            num = Math.random() >= 0.5 ? 1 : 2
            console.log(num)
            imgurl.value = new URL(`../assets/0${num}.jpg`, import.meta.url).href
        }
        console.log(luyou.value = route.query.name)
        // watch(() => route.query,
        //     async newParams => {
        //         luyou.value = await fetchUser(newParams.name)
        //     })
        //  const emit = defineEmits(['MyClick'])
        function huihua() {
            console.log("多多")
            emit("MyClick", "alskdjalksdjgladskjghgkadsjhgaksjdh")
            console.log(change)
            const { change1 } = change
            console.log(change1)
        }
        defineExpose({ name: my, huihua })
        return { my, msg, huihua, luyou, imgurl, gaiimg }
    }
}
</script>

<style>
.ingboc img {
    width: 100px;
    height: 100px;
}
</style>