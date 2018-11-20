/**
 * @file 获取数据的类
 * @description 对消息的错误和成功进行统一的处理，统一消息的提示样式和返回的数据结构
 * @author jamesjianpeng <pengjian@sobug.com>
 */ 
import axios from 'axios'
import Vue from 'vue'

export default () => {
    /**
     * @todo 设置 X-Requested-With 值为 XMLHttpRequest
     * Content-Type 为 application/x-www-form-urlencoded;charset=UTF-8
     * 在浏览器环境下设置 X-CSRF-Token 
     * 允许跨域请求
     * 
     * @summary 特此声明，再也不看网上关于axios跨域的设置了，一群傻逼（包括自己），麻痹的设置服务器的返回头最重要
     * add_header 'Access-Control-Allow-Origin' "*" 搞定不让你发请求
     * add_header 'Access-Control-Allow-Method' "GET, POST, PUT, PATCH, OPTIONS"; 搞定预请求
     * add_header 'Access-Control-Allow-Headers' "*"; 结合上一个搞定跨域预请求请求头信息验证
     * 客户端设置  axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
     * post 请求下面这个
     * axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
     * 如果项目只能传formdata 使用html5接口 FormData 对数组遍历 在transformRequest 方法内执行该项
     * 以后设置回来翻这个，再看网上教程我是大傻逼，立碑、立碑、立碑
     */ 
    let axios_post = axios.create({})
    let axios_post_formdata = axios.create({})
    let axios_get = axios.create({})
    axios.defaults.maxRedirects = 3
    axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

    // axios_post.defaults.transformRequest = [function(data, header) {
    //     axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    //     let formData = new FormData()
    //     for(let item in data) {
    //         formData.append(item, data[item])
    //     }
    //     return formData
    // }]


    // 返回封装后的get和post请求
    const $axios = {
        get(url, params) {
            return axios_get.get(url, params).catch((err) => {
                console.log(err)
            });
        },
        post(url, params) {
            return axios_post.post(url, params).catch((err) => {
                console.log(err)
            });
        },
        /** 
         *   @description 用来处理 formdata 的 post
         *   需要设置一下 headers，如下：
         */
        postFormdata(url, params) {
            const headers = {'Content-Type': 'multipart/form-data'}
            return axios_post_formdata.post(url, params, { headers }).catch((err) => {
                console.log(err)
            });
        }
    }

    Vue.prototype.$axios = $axios
}