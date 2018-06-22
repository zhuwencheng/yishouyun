<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="confirmOrder" v-if="orderData">
        <div class="hd"><hr><small class="left"></small><small class="right"></small><em></em>{{title}}</div>
        <div class="form-group">
          <label>会员手机号：</label>
          <span>{{orderData.orderInfo.memberName}} {{orderData.orderInfo.memberPhone}}</span>
        </div>
        <div class="form-group">
          <label>下单时间：</label>
          <span>{{orderData.orderInfo.createTimeStr}}</span>
        </div>
        <div class="form-group">
          <label>备注</label>
          <textarea :value="orderData.orderInfo.remark"></textarea>
        </div>
        <h4><span>已购商品</span><em></em></h4>
        <div class="detail">
            <dl v-for="(item,i) in orderData.orderItems" :key="i">
              <dt>{{item.goodsName}}</dt>
              <dd>{{item.goodsNumber}}</dd>
              <dd class="money">{{item.goodsAmount.toFixed(2)}}</dd>
            </dl>
        </div>
        <div class="total">合计：<span>{{orderData.orderInfo.payAmount.toFixed(2)}}元</span></div>
    </div>
    
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      title: "奶茶小店"
    };
  },
  props: ["orderData"],
  computed: {
    ...mapGetters("app", ["shopCartDone", "shopCartNum", "totalMoney"])
  },
  methods: {},
  mounted() {},
  created() {}
};
</script>

<style>
</style>
