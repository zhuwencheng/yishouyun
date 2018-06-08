import 'babel-polyfill';
import Vue from 'vue';
import iView from 'iview';
import { router } from './router/index';
import store from './store';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './styles/common.less';
import util from './libs/util';
import axios from 'axios';
// var instance = axios.create({
//     baseURL: 'http://192.168.30.120:8081',
//     timeout: 5000,
//     // headers: {
//     // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//     // }
// });
Vue.prototype.$http = axios;
// import  VueResource  from 'vue-resource'
// Vue.use(VueResource) 
Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        // currentPageName: ''
    },
    mounted() {
        // this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        // this.$store.commit('setOpenedList');
        // this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        // this.$store.commit('updateMenulist');
        // iview-admin检查更新
        //util.checkUpdate(this);
    },
    created() {
        // let tagsList = [];
        // appRouter.map((item) => {
        //     if (item.children.length <= 1) {
        //         tagsList.push(item.children[0]);
        //     } else {
        //         tagsList.push(...item.children);
        //     }
        // });
        // this.$store.commit('setTagsList', tagsList);
    }
});
