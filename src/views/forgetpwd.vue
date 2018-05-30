<style lang="less" scoped>
@import "./forgetpwd.less";
</style>

<template>
   <div class="forgetpwd" @keydown.enter="handleSubmit">
       <div class="hd">找回密码</div>
        <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="phone" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        门店手机号
                    </label>
                    <input type="text" v-model="form.phone"/>
                </div>
            </FormItem>
            <FormItem prop="userName" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        验证码
                    </label>
                    <input type="text" v-model="form.userName"/>
                    <span class="sendcode">发送验证码</span>
                </div>
            </FormItem>
            <div class="submit" @click="handleSubmit">
                <span class="btn">下一步</span>
            </div>
        </Form>
   </div>
</template>

<script>
import Cookies from "js-cookie";
import XzSelect from "./my-components/xz-select";
export default {
  components: {
    XzSelect
  },
  data() {
    return {
      form: {
        userName: "zhuwencheng",
        password: "",
        phone: "",
        system: "0"
      },
      selectOptions: [
        { label: "前台收银", value: "0" },
        { label: "订单管理", value: "1" },
        { label: "会员管理", value: "2" }
      ],
      rules: {
        phone: [
          {
            required: true,
            message: "请填写正确格式的手机号",
            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
            trigger: "blur"
          }
        ],
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "请填写6-20位的密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          Cookies.set('user', this.form.userName);
          Cookies.set('password', this.form.password);
          this.$router.push({
              name: 'shoplist'
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
