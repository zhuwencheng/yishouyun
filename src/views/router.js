import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};
export const forgetPwdRouter = {
    path: '/forgetpwd',
    name: 'forgetpwd',
    meta: {
        title: 'forgetpwd - 忘记密码'
    },
    component: () => import('@/views/forgetpwd.vue')
};
export const resetPwdRouter = {
    path: '/resetpwd',
    name: 'resetpwd',
    meta: {
        title: 'resetpwd - 重设密码'
    },
    component: () => import('@/views/resetpwd.vue')
};
export const registerRouter = {
    path: '/register',
    name: 'register',
    meta: {
        title: 'register - 注册'
    },
    component: () => import('@/views/register.vue')
};
export const setPwdRouter = {
    path: '/setpwd',
    name: 'setpwd',
    meta: {
        title: 'setpwd - 设置密码'
    },
    component: () => import('@/views/setpwd.vue')
};
export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const centerRouter = {
    path: '/',
    name: 'centerRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'shoplist', title: '收银台', name: 'shoplist', component: () => import('@/views/usercenter/shoplist.vue') },
        { path: 'ordermanage', title: '订单管理', name: 'ordermanage', component: () => import('@/views/usercenter/ordermanage.vue') },
        { path: 'vipmanage', title: '会员管理', name: 'vipmanage', component: () => import('@/views/usercenter/vipmanage.vue') },
        { path: 'signout', title: '奶茶小店', name: 'signout', component: () => import('@/views/usercenter/signout.vue') }
    ]
};


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,//登录
    forgetPwdRouter,//忘记密码
    resetPwdRouter,//重设密码
    registerRouter,//注册
    setPwdRouter,//设置密码
    centerRouter,//个人中心
    page404//404页面
];
