// import { otherRouter, appRouter } from "@/router/router";
// import Util from "@/libs/util";
// import Cookies from "js-cookie";
// import Vue from "vue";

const app = {
  namespaced: true,
  state: {
    shopCart: [],
    buyer: null,
    orderDes: ""
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
    },
    totalMoney(state) {
      let a = 0;
      state.shopCart.map(function(item) {
        a = a + item.salePrice * item.num;
      });
      return a;
    }
  },
  mutations: {
    addToCart(state, list) {
      let remarkText = [];
      list.goodsRemarkList.map(function(item, index) {
        if (item.checked) {
          remarkText.push(item.remarkName);
        }
      });
      list.remarkText=remarkText;
      state.shopCart.push(list);
      //更新到本地存储
      sessionStorage.shopCart=JSON.stringify(state.shopCart);
      //console.log(state.shopCart);
    },
    updateShopCart(state, data) {
      state.shopCart = data;
      sessionStorage.shopCart=JSON.stringify(state.shopCart);
    },
    deleteShopItem(state, index) {
      state.shopCart.splice(index, 1);
      sessionStorage.shopCart=JSON.stringify(state.shopCart);
    },
    clearAllState(state) {
      state.shopCart = [];
      state.buyer= null;
      state.orderDes= ""
      sessionStorage.removeItem('shopCart');
    },
    updateBuyer(state, { userName, userId }) {
      state.buyer = {
        userName,
        userId
      };
    },
    updateOrderDes(state, des) {
      state.orderDes = des;
    },
    initShopCart(state){
      if(sessionStorage.shopCart){
        state.shopCart=JSON.parse(sessionStorage.shopCart);
      }else{
        state.shopCart=[];
      }
    }
  },
  actions: {
    addProductToCart({ state, commit }, product) {
      commit("addToCart", product);
    },
    deleteShopItem({ state, commit }, index) {
      console.log("delete", index);
      commit("deleteShopItem", index);
    },
    updateShopCart({ state, commit }, data) {
      commit("updateShopCart", data);
    },
    clearAll({ state, commit }) {
      commit("clearAllState");
    },
    updateBuyer({ state, commit }, data) {
      commit("updateBuyer", data);
    },
    updateOrderDes({ state, commit }, data) {
      commit("updateOrderDes", data);
    },
    initShopCartAction({ state, commit }, data) {
      commit("initShopCart", data);
    }
  }
};

export default app;
