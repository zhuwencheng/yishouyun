<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="payType">
      <span @click="select(2)"><img :src="imgUrl.wx" /></span>
      <span @click="select(1)"><img :src="imgUrl.zfb" /></span>
      <span @click="select(4)"><img :src="imgUrl.yhk" />银行卡</span>
      <span @click="select(3)"><img :src="imgUrl.xj" />现金</span>
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
  methods: {
    select(type){
      this.$emit('select',type)
    }
  },
  mounted() {}
};
</script>

<style>
</style>
