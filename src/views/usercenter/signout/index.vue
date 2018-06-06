<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="signout">
        <div class="sign-ct">
          <div class="hd"><em></em>奶茶小店</div>
            <div class="xz-form-group">
                <label>
                    收银员：
                </label>
                <input type="text" v-model="userName"/>
            </div>
            <div class="submit"  @click="handleSubmit">
                <span class="btn">退出</span>
            </div>
        </div>
    </div>
    
</template>

<script>
// import Cookies from "js-cookie";
export default {
  components: {},
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    handleSubmit() {
      const _this = this;
      _this.$Spin.show();
      setTimeout(() => {
          this.$Spin.hide();
        _this.$Message.success("成功提示！");
      }, 1000);
    }
  },
  mounted() {}
};
</script>

<style>
</style>
