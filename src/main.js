import "babel-polyfill";
import Vue from "vue";
import iView from "iview";
import { router } from "./router/index";
import store from "./store";
import App from "./app.vue";
import "iview/dist/styles/iview.css";
import "./styles/common.less";
import util from "./libs/util";
import axios from "axios";
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    if (response.data.code === "201") {
      router.push({
        name: "login"
      });
    }else{
        return response;
    }
    
  },
  function(error) {
    return Promise.reject(error);
  }
);
// var instance = axios.create({
//   baseURL: "http://192.168.30.120:8081",
//   timeout: 5000,
//   //   transformResponse: [
//   //     function(data) {
//   //       // 对 data 进行任意转换处理

//   //       return data;
//   //     }
//   //   ],
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
//   }
// });
Vue.prototype.$http = axios;
Vue.use(iView);

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: h => h(App),
  data: {},
  mounted() {},
  created() {}
});
