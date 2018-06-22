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
                {{userName}}
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
      userName: sessionStorage.token
    };
  },
  methods: {
    handleSubmit() {
      const _this = this;
      _this.$Spin.show();
      _this.$http
        .post("/api/users/logout")
        .then(function(res) {
          const result = res.data;
          if (result.code === "200") {
            _this.$Spin.hide();
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('mchName');
            _this.$router.push({
              name: "login"
            });
          } else {
            _this.$Spin.hide();
            _this.$Message.error(result.message);
          }
        })
        .catch(function(error) {
          _this.$Spin.hide();
          _this.$Message.error("网络异常！");
        });
    }
  },
  mounted() {}
};
</script>

<style>
</style>
