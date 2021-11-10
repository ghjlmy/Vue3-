<template>
  <div>我是便签</div>
  <input v-model="noteDataValue" type="text" />
  <input type="button" value="add" @click="setAddNoteData" />
  <div>
    <p v-for="(v, i) in noteData" :key="i" @click="setRemnoteData(i)">
      {{ v }}
    </p>
  </div>
  <noteSon :name="sonName" @testEmit="testEmit"></noteSon>
  <input type="button" @click="trigger" value="触发自己的事件" />
</template>
<script setup>
import { ref, defineEmits, watch } from "vue";
import noteSon from "./noteSon.vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const emit = defineEmits(["testEmit"]);
let noteData = ref([]);
let noteDataValue = ref("1111");
function setAddNoteData() {
  noteData.value.push(noteDataValue.value);
  noteDataValue.value = "";
}
let sonName = ref("你能改变我吗？");
function testEmit() {
  console.log("触发了testEmit");
  sonName.value = "我变了";
  // router.push("/log")
}
watch(sonName, () => {
  console.log("hhhh");
});
function trigger() {
  console.log("点击了");
  testEmit();
}
function setRemnoteData(index) {
  noteData.value.splice(index, 1);
}
</script>
<style>
</style>