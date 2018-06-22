<style lang="less" scoped>
@import "./main.less";
</style>
<template>
    <div class="main">
        <div class="uc-topNav">
            <div class="logo"></div>
            <ul>
                <li><router-link to="/shoplist"><em class="nav-icon icon1"></em><span>收银台</span></router-link></li>
                <li><router-link to="/ordermanage"><em class="nav-icon icon2"></em><span>订单管理</span></router-link></li>
                <li><router-link to="/vipmanage"><em class="nav-icon icon3"></em><span>会员营销</span></router-link></li>
                <li><router-link to="/signout" class="signout"><em class="nav-icon icon4"></em><span>奶茶小店</span></router-link></li>
            </ul>
        </div>
        <div class="uc-page">
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    
  },
  methods: {
    
  },
  watch: {
    
  },
  mounted() {
    
  },
  created() {
    
  },
  dispatch() {
    
  }
};
</script>
