<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="paySuc">
      <p><img :src="imgUrl.suc" /></p>
      <p>{{payTypeOptions[(payType-1)]}}支付成功</p>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgUrl: {
        suc: require("../../../images/suc-icon.png")
      },
      payTypeOptions: ["支付宝", "微信", "现金", "银行卡"]
    };
  },
  props: ["payType"],
  methods: {},
  mounted() {}
};
</script>

<style>
</style>
