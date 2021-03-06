import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import VueRouter from 'vue-router';
// import Cookies from 'js-cookie';
import {routers} from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (!sessionStorage.token && to.meta.requireAuth) { // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login'
        });
    } else {
        next();
    }
});

router.afterEach((to) => {
    //Util.openNewPage(router.app, to.name, to.params, to.query);
    iView.LoadingBar.finish();
    // window.scrollTo(0, 0);
});
