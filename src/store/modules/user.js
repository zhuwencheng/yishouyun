import Cookies from 'js-cookie';

const user = {
    namespaced: true,
    state: {
        userName:'1z23'
    },
    mutations: {
        logout (state, vm) {
            Cookies.remove('user');
            Cookies.remove('password');
            localStorage.clear();
        }
    }
};

export default user;
