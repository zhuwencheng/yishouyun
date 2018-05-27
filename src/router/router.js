import Main from '@/views/usercenter/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    component: () => import('@/views/login.vue')
};
export const forgetPwdRouter = {
    path: '/forgetpwd',
    name: 'forgetpwd',
    meta: {
        title: '忘记密码'
    },
    component: () => import('@/views/forgetpwd.vue')
};
export const resetPwdRouter = {
    path: '/resetpwd',
    name: 'resetpwd',
    meta: {
        title: '重设密码'
    },
    component: () => import('@/views/resetpwd.vue')
};
export const registerRouter = {
    path: '/register',
    name: 'register',
    meta: {
        title: '注册'
    },
    component: () => import('@/views/register.vue')
};
export const setPwdRouter = {
    path: '/setpwd',
    name: 'setpwd',
    meta: {
        title: '设置密码'
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
    redirect: '/shoplist',
    component: Main,
    children: [
        { path: 'shoplist', meta: { requireAuth: true , title: '收银台'}, name: 'shoplist', component: () => import('@/views/usercenter/shoplist/index.vue') },
        { path: 'ordermanage', meta: { requireAuth: true , title: '订单管理'}, name: 'ordermanage', component: () => import('@/views/usercenter/ordermanage/index.vue') },
        { path: 'vipmanage', meta: { requireAuth: true , title: '会员管理'}, name: 'vipmanage', component: () => import('@/views/usercenter/vipmanage/index.vue') },
        { path: 'signout', meta: { requireAuth: true , title: '奶茶小店'}, name: 'signout', component: () => import('@/views/usercenter/signout/index.vue') }
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
