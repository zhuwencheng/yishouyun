<style lang="less" scoped>
@import "./login.less";
</style>
<template>
   <div class="l-bj">
            <div class="login" @keydown.enter="handleSubmit">
                <Form ref="loginForm" :model="form" :rules="rules">
                    <FormItem prop="mchCode" class="reset-ivu-form-item">
                        <div class="xz-form-group">
                            <label>
                                门店手机号：
                            </label>
                            <input type="text" v-model="form.mchCode" maxlength="11"/>
                        </div>
                    </FormItem>
                    <FormItem prop="account" class="reset-ivu-form-item">
                        <div class="xz-form-group">
                            <label>
                                帐号：
                            </label>
                            <input type="text" v-model="form.account" maxlength="11"/>
                        </div>
                    </FormItem>
                    <FormItem prop="password" class="reset-ivu-form-item">
                        <div class="xz-form-group">
                            <label>
                                密码：
                            </label>
                            <input type="password" v-model="form.password" maxlength="16"/>
                        </div>
                    </FormItem>
                    <div class="xz-form-group">
                        <label>
                            请选择系统：
                        </label>
                        <Select v-model="form.system" style="width:200px">
                            <Option v-for="item in selectOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <!-- <XzSelect v-model="form.system" :options="selectOptions" class="fr" style="margin-top:10px"></XzSelect> -->
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
        account: "",
        password: "",
        mchCode: "",
        system: 1
      },
      selectOptions: [
        { label: "前台收银", value: 1 },
        { label: "后台管理", value: 0 }
      ],
      rules: {
        mchCode: [
          {
            required: true,
            message: "请填写正确格式的手机号",
            pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
            trigger: "blur"
          }
        ],
        account: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "请填写6-16位的密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      const _this = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          _this.$Spin.show();
          const params = _this.form;
          this.$http
            .post("/api/users/login", params)
            .then(function(res) {
              const result = res.data;
              if (result.code === "200") {
                _this.$Spin.hide();
                sessionStorage.token = result.object.phone;
                sessionStorage.mchName = result.object.mchName;
                if (
                  result.object.mchType !== _this.form.system &&
                  result.object.mchType !== 0
                ) {
                  _this.$Message.error("账号密码错误！");
                  return;
                }
                if (_this.form.system === 1) {
                  _this.$router.push({
                    name: "shoplist"
                  });
                } else {
                  location.href = "./admin/index.html";
                }
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
    //console.log(this.$http);
  }
};
</script>

<style>
</style>
