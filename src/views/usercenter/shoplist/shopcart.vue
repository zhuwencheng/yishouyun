<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="scart" v-show="show">
        <div class="mask" @click="hide"></div>
        <div class="wrapper">
          <div class="hd"><em></em>购物车</div>
          <div class="thw">
            <span class="t-1">序号</span>
            <span class="t-2">名称</span>
            <span class="t-3">单价</span>
            <span class="t-4">数量</span>
            <span class="t-5">总价</span>
            <span class="t-6">备注</span>
          </div>
          <div class="bd">
            <div class="tdw" v-for="(item,i) in shopCartDone" :key="i">
              <div class="t-1">{{i+1}}</div>
              <div class="t-2" :title="item.goodsName">{{item.goodsName}}</div>
              <div class="t-3">{{item.salePrice}}</div>
              <div class="t-4"><InputNumber v-model="item.num" @change="changeNum"/></div>
              <div class="t-5">{{(item.salePrice*item.num).toFixed(2)}}</div>
              <div class="t-6">
                <Tooltip :content="i+' '+item.goodsName+' '+item.remarkText.join('/')" placement="bottom-end">
                    {{item.remarkText[0]}}
                </Tooltip>
                <em class="delete" title="删除" @click="deleteShopItem(i)">×</em>
              </div>
            </div>
          </div>
          <dl class="f-tool">
            <dt><Button type="primary" long size="large" @click="submit" v-if="shopCartNum>0">下单</Button></dt>
            <dd class="total-money">￥{{totalMoney.toFixed(2)}}</dd>
            <dd class="total-num">商品合计{{shopCartNum}}件</dd>
          </dl>
        </div>
    </div>
    
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import InputNumber from "../../my-components/InputNumber"; //新增用户配置
export default {
  components: {
    InputNumber
  },
  data() {
    return {
      num: 2
    };
  },
  props: ["show"],
  methods: {
    hide() {
      this.$emit("hide");
    },
    submit() {
      this.$emit("submit");
    },
    changeNum() {
      //console.log(123);
    },
    ...mapActions('app',['deleteShopItem'])
  },
  computed: {
    ...mapGetters("app", ["shopCartDone", "shopCartNum", "totalMoney"])
  },
  mounted() {
    console.log("111");
  }
};
</script>

<style>
</style>
