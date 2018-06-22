<style lang="less" scoped>
@import "./setpwd.less";
</style>

<template>
<div class="l-bj">
   <div class="setpwd" @keydown.enter="handleSubmit">
       <div class="hd">设置密码</div>
        <Form ref="form" :model="form" :rules="rules">
            <FormItem prop="password" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        重新设置密码：
                    </label>
                    <input type="password" v-model="form.password"/>
                </div>
            </FormItem>
            <FormItem prop="rePassword" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        确认密码：
                    </label>
                    <input type="password" v-model="form.rePassword"/>
                </div>
            </FormItem>
            <div class="submit" @click="handleSubmit">
                <span class="btn">提交</span>
            </div>
        </Form>
   </div>
</div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  components: {},
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "" || value.length > 16 || value.length < 6) {
        callback(new Error("请填写6-16位的密码"));
      } else {
        if (this.form.rePassword !== "") {
          this.$refs.form.validateField("rePassword");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("重复密码不能为空"));
      } else if (value !== this.form.password) {
        callback(new Error("两次的密码不一致"));
      } else {
        callback();
      }
    };
    return {
      form: {
        phone: null,
        password: "",
        rePassword: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      const _this = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          _this.$Spin.show();
          _this.$http
            .post("/api/users/register/step2", {
              password: _this.form.password,
              confirmPassword: _this.form.rePassword,
              account: _this.form.phone
            })
            .then(function(res) {
              const result = res.data;
              if (result.code === "200") {
                _this.$Spin.hide();
                _this.$Message.success("注册成功！");
                setTimeout(function() {
                  _this.$router.push({
                    name: "login"
                  });
                }, 2000);
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
      });
    }
  },
  created() {
    this.form.phone = this.$route.params.phone;
    console.log(this.form.phone);
  }
};
</script>

<style>
</style>
