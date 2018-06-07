import { otherRouter, appRouter } from '@/router/router';
import Util from '@/libs/util';
import Cookies from 'js-cookie';
import Vue from 'vue';

const app = {
    namespaced: true,
    state: {
        shopCart: [
            {
                shopTitle: "01-招牌奶茶",
                num: 1,
                remark: [
                    { name: "冰", id: 1 },
                    { name: "冰", id: 2 },
                    { name: "冰", id: 3 }
                ]
            }
        ],
        buyer: null,
        orderDes: ''
    },
    getters: {
        shopCartDone(state) {
            return state.shopCart;
        },
        buyerDone(state) {
            return state.buyer;
        },
        orderDesDone(state) {
            return state.orderDes;
        },
        shopCartNum(state) {
            return state.shopCart.length;
        }
    },
    mutations: {
        addToCart(state, list) {
            state.shopCart.push(list);
        },
        updateShopCart(state, data) {
            state.shopCart = data;
        },
        clearAllState(state) {
            state.shopCart = [];
        },
        updateBuyer(state, { userName, userId }) {
            state.buyer = {
                userName,
                userId
            }
        },
        updateOrderDes(state, des) {
            state.orderDes = des;
        }
    },
    actions: {
        addProductToCart({ state, commit }, product) {
            commit('addToCart', product);
        },
        updateShopCart({ state, commit }, data) {
            commit('updateShopCart', data);
        },
        clearAll({ state, commit }) {
            commit('clearAllState');
        },
        updateBuyer({ state, commit }, data) {
            commit('updateBuyer', data);
        },
        updateOrderDes({ state, commit }, data) {
            commit('updateOrderDes', data)
        }
    }
};

export default app;
