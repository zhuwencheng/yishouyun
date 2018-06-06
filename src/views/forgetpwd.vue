<style lang="less" scoped>
@import "./forgetpwd.less";
</style>

<template>
<div class="l-bj">
   <div class="forgetpwd" @keydown.enter="handleSubmit">
       <div class="hd">找回密码</div>
        <Form ref="forgetpwdForm" :model="form" :rules="rules">
            <FormItem prop="phone" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        门店手机号
                    </label>
                    <input type="text" v-model="form.phone"/>
                </div>
            </FormItem>
            <FormItem prop="code" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        验证码
                    </label>
                    <input type="text" v-model="form.code"/>
                    <CountDown class="sendcode"  @send="send"></CountDown>
                </div>
            </FormItem>
            <div class="submit" @click="handleSubmit">
                <span class="btn">下一步</span>
            </div>
        </Form>
   </div>
</div>
</template>

<script>
import Cookies from "js-cookie";
import CountDown from "./my-components/count-down";
export default {
  components: {
    CountDown
  },
  data() {
    return {
      form: {
        phone: "",
        code: ""
      },
      rules: {
        phone: [
          {
            required: true,
            message: "请填写正确格式的手机号",
            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
            trigger: "blur"
          }
        ],
        code: [
          { required: true, message: "请填写正确的验证码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.forgetpwdForm.validate(valid => {
        if (valid) {
          this.$Message.success('成功提示！');
        }
      });
    },
    send(){
      this.$Message.success('发送成功！');
    }
  }
};
</script>

<style>
</style>
