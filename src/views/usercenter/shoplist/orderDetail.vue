<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="orderDetail">
        <div class="form-group">
          <!-- <span class="confirm">确认</span> -->
          <span class="add" @click="addEdit">+</span>
          <label>会员手机号：</label>
          <input type="text" maxlength="11" v-model="phone">
        </div>
        <div class="form-group">
          <label>备注</label>
          <textarea v-model="des"></textarea>
        </div>
        <!-- <div class="form-group">
          <label>下单时间：</label>
          <span>{{orderTime}}</span>
        </div> -->
        <h4><span>已购商品</span><em></em></h4>
        <div class="detail">
          <dl v-for="(item,i) in shopCartDone" :key="i">
            <dt>{{item.goodsName}}</dt>
            <dd>{{item.num}}</dd>
            <dd class="money">{{(item.salePrice*item.num).toFixed(2)}}</dd>
          </dl>
        </div>
        <div class="total">合计：<span>{{totalMoney.toFixed(2)}}元</span></div>
    </div>
    
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      phone: "",
      des: "",
      orderTime: null
    };
  },
  props: ["value"],
  methods: {
    addEdit() {
      this.$emit("addUser");
    },
    submit() {
      const _this = this;
      _this.updateBuyer(this.phone);
      _this.updateOrderDes(this.des);
      _this.$Spin.show();
      const params = {
        phone: _this.phone,
        des: _this.des,
        orderItems: _this.shopCartDone
      };
      console.log(params);
      return new Promise(resolve => {
        this.$http
          .post("/api/users/orderinfo/save", params)
          //.post("http://erp.ipaynow.cn/users/login", params)
          .then(function(res) {
            const result = res.data;
            if (result.code === "200") {
              _this.$Spin.hide();
              resolve(result);
            } else {
              _this.$Spin.hide();
              _this.$Message.error(result.message);
            }
          })
          .catch(function(error) {
            _this.$Spin.hide();
            _this.$Message.error("网络异常！");
          });
      });
    },
    ...mapActions("app", ["updateBuyer", "updateOrderDes"])
  },
  mounted() {},
  computed: {
    ...mapGetters("app", ["shopCartDone", "shopCartNum", "totalMoney"])
  },
  created() {
    // this.orderTime=new Date().format("yyyy-MM-dd hh:mm:ss")
  }
};
</script>

<style>
</style>
