<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="payType">
      <span><img :src="imgUrl.wx" /></span>
      <span><img :src="imgUrl.zfb" /></span>
      <span><img :src="imgUrl.yhk" />银行卡</span>
      <span><img :src="imgUrl.xj" />现金</span>
    </div>
    
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgUrl:{
        wx:  require('../../../images/wxzf.png'),
        zfb:  require('../../../images/zfb.png'),
        yhk:  require('../../../images/yhk.png'),
        xj:  require('../../../images/xjzf.png')
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
