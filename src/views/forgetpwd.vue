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
                    <input type="text" v-model="form.phone" maxlength="11"/>
                </div>
            </FormItem>
            <FormItem prop="code" class="reset-ivu-form-item">
                <div class="xz-form-group">
                    <label>
                        验证码
                    </label>
                    <input type="text" v-model="form.code" maxlength="6"/>
                    <CountDown class="sendcode"  @send="send" v-if="isVPhone"></CountDown>
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
      start: false,
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
      const _this = this;
      // _this.$router.push({
      //       name: "resetpwd",
      //       params: {
      //         phone: "15927216320"
      //       }
      //     });
      this.$refs.forgetpwdForm.validate(valid => {
        if (valid) {
          this.$http
            .post("/api/users/forget/password/step1", { account: _this.form.phone, phoneCode:  _this.form.code})
            .then(function(res) {
              const result = res.data;
              if (result.code === "200") {
                _this.$router.push({
                      name: "resetpwd",
                      params: {
                        phone: _this.form.phone
                      }
                    });
              } else {
                _this.$Message.error(result.message);
              }
            })
            .catch(function(error) {
              _this.$Spin.hide();
              _this.$Message.error("网络异常！");
            });
        }
      });
    },
    send() {
      const _this = this;
      const params = _this.form;
      this.$http
        .post("/api/users/forget/sendSms", { account: _this.form.phone })
        .then(function(res) {
          const result = res.data;
          if (result.code === "200") {
            _this.$Message.success("发送成功！");
          } else {
            _this.$Message.error(result.message);
          }
        })
        .catch(function(error) {
          _this.$Spin.hide();
          _this.$Message.error("网络异常！");
        });
    }
  },
  computed: {
    isVPhone() {
      const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      return reg.test(this.form.phone);
    }
  }
};
</script>

<style>
</style>
