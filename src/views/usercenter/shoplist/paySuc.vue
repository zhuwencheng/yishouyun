<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="paySuc">
      <p><img :src="imgUrl.suc" /></p>
      <p>微信支付成功</p>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgUrl:{
        suc:  require('../../../images/suc-icon.png')
      }
    };
  },
  props:['value'],
  methods: {},
  mounted() {}
};
</script>

<style>
</style>
