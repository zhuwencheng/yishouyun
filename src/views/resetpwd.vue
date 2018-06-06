<style lang="less" scoped>
@import "./resetpwd.less";
</style>

<template>
<div class="l-bj">
   <div class="resetpwd" @keydown.enter="handleSubmit">
       <div class="hd">重置密码</div>
        <Form ref="form" :model="form" :rules="rules">
            <FormItem prop="password" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        重新设置密码
                    </label>
                    <input type="text" v-model="form.password"/>
                </div>
            </FormItem>
            <FormItem prop="rePassword" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        确认密码
                    </label>
                    <input type="text" v-model="form.rePassword"/>
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
  components: {
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请填写密码"));
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
        password: "",
        rePassword: ""
      },
      selectOptions: [
        { label: "前台收银", value: "0" },
        { label: "订单管理", value: "1" },
        { label: "会员管理", value: "2" }
      ],
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          Cookies.set("user", this.form.userName);
          Cookies.set("password", this.form.password);
          this.$router.push({
            name: "shoplist"
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
