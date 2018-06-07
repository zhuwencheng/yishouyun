<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="scart" v-show="show">
        <div class="mask" @click="hide"></div>
        <div class="wrapper">
          <div class="hd"><em></em>购物车{{shopCartDone[0].shopTitle}}</div>
          <div class="thw">
            <span class="t-1">序号</span>
            <span class="t-2">名称</span>
            <span class="t-3">单价</span>
            <span class="t-4">数量</span>
            <span class="t-5">总价</span>
            <span class="t-6">备注</span>
          </div>
          <div class="bd">
            <div class="tdw">
              <div class="t-1">01</div>
              <div class="t-2">招牌奶茶</div>
              <div class="t-3">18</div>
              <div class="t-4"><InputNumber v-model="num" @change="changeNum"/></div>
              <div class="t-5">36</div>
              <div class="t-6">
                <Tooltip content="01招牌奶茶 冰/少糖" placement="bottom-end">
                    冰/少糖
                </Tooltip>
                <em class="delete" title="删除">×</em>
              </div>
            </div>
          </div>
          <dl class="f-tool">
            <dt><Button type="primary" long size="large" @click="submit">下单</Button></dt>
            <dd class="total-money">￥36</dd>
            <dd class="total-num">商品合计2件</dd>
          </dl>
        </div>
    </div>
    
</template>

<script>
import { mapGetters, mapActions ,mapState} from "vuex";
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
      console.log(123);
    }
  },
  computed: {
    ...mapGetters("app", ['shopCartDone','shopCartNum'])
  }
};
</script>

<style>
</style>
