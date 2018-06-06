<style lang="less" scoped>
@import "./login.less";
</style>

<template>
   <div class="l-bj">
            <div class="login" @keydown.enter="handleSubmit">
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
                                帐号
                            </label>
                            <input type="text" v-model="form.userName"/>
                        </div>
                    </FormItem>
                    <FormItem prop="password" class="reset-ivu-form-item">
                        <div class="xz-form-group">
                            <label>
                                密码
                            </label>
                            <input type="password" v-model="form.password"/>
                        </div>
                    </FormItem>
                    <div class="xz-form-group">
                        <label>
                            请选择系统
                        </label>
                        <XzSelect v-model="form.system" :options="selectOptions" class="fr" style="margin-top:10px"></XzSelect>
                    </div>
                    <div class="hidden o-link">
                        <a href="#/forgetpwd">忘记密码</a>
                        <a href="#/register" class="fr">注册</a>
                    </div>
                    <div class="submit" @click="handleSubmit">
                        <span class="btn">登录</span>
                    </div>
                </Form>
        </div>
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
        userName: "",
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
        password: [
          { required: true, message: "请填写6-20位的密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          Cookies.set("user", this.form.userName);
          Cookies.set("password", this.form.password);
          this.$router.push({
            name: "shoplist"
          });
        }
      });
    }
  },
  created(){
    //console.log(this.$http);
  }
};
</script>

<style>
</style>
