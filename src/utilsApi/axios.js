import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'http://localhost:3001'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截
axios.interceptors.request.use(
    (response) => {
      /**
       * 根据你的项目实际情况来对 config 做处理
       * 这里对 config 不做任何处理，直接返回
       */
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  

// 后置拦截
axios.interceptors.response.use((response)=>{
    return response
},(error)=>{
    if (error.response && error.response.data) {
        const code = error.response.status
        const msg = error.response.data.message
        ElMessage.error(`Code: ${code}, Message: ${msg}`)
        console.error(`[Axios Error]`, error.response)
      } else {
        ElMessage.error(`${error}`)
      }
      return Promise.reject(error)

})
export default axios