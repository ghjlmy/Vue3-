<template>
    <div class="root">
        <div class="">
            <el-input v-model="useId" placeholder="Please input" />
            <el-button @click="lianjie" type="primary">Primary</el-button>
        </div>
        <div
            class="liao-root"
            :style="{ justifyContent: v.use ? 'flex-end' : 'row' }"
            v-for="(v,i) in WsDate"
            :key="i"
        >
            <div :class="v.use ? 'right' : 'left'">
                <img
                    :style="{ display: v.use ? 'none' : 'inline' }"
                    class="head-img"
                    src="https://img2.baidu.com/it/u=3755297117,609162545&fm=26&fmt=auto"
                    alt="加载失败"
                />
                <p>{{ v.msg }}</p>
                <img
                    :style="{ display: !v.use ? 'none' : 'inline' }"
                    class="head-img"
                    src="https://img1.baidu.com/it/u=1789144087,1527592293&fm=26&fmt=auto"
                    alt="加载失败"
                />
            </div>
        </div>
        <div class="text-input">
            <el-input v-model="input" placeholder="Please input" />
            <el-button @click="Send" type="primary">Primary</el-button>
        </div>
    </div>
</template>
<script>
import { ref } from "vue"
import { useRoute, useRouter} from "vue-router"
export default {
    setup() {
        let WsDate = ref([{ msg: "hhhh" }])
         let input = ref("")
          let useId = ref(0)
          let router=useRouter
           let route=useRouter
        // 建立链接
        let ws
        function lianjie() {

            ws = new WebSocket("ws://localhost:8080")
             ws.onopen = e => {
            console.log('连接成功', e)
            ws.send(JSON.stringify({ useId: useId.value, one: true }));
            ws.onmessage = e => {
            console.log('服务器端返回：', e.data)
            WsDate.value.push({ msg: e.data, use: false })
        }
        }
        }

        // 连接成功回调
       
       
        // 监听服务器端返回的信息
        let Send = () => {
            if(!router.query.useId){
           return route.push("/log")
            }
            ws.send(JSON.stringify({ "content": input.value })); // 客户端与服务器端通信
            WsDate.value.push({ msg: input.value, use: true })
            input.value = ""
        }

        return {
            input, Send, WsDate, useId,lianjie
        }
    }
}
</script>
<style >
.liao-root {
    /* background-color: rgb(244, 255, 91); */
    display: flex;
    margin: 10px 10px;
}
.liao-root .left {
    text-align: left;
    max-width: 70%;
    background-color: rgb(164, 165, 236);
    display: flex;
    align-items: center;
    border-radius: 4%;
    padding-right: 10px;
}
.liao-root .right {
    display: flex;
    align-items: center;
    text-align: left;
    background-color: rgb(164, 236, 197);
    margin-left: 80px;
    border-radius: 4%;
    padding-left: 10px;
}
.liao-root .head-img {
    width: 50px;
    height: 50px;
    padding: 10px;
}
.text-input {
    display: flex;
    position: fixed;
}
</style>