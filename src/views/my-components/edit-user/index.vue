<style lang="less" scoped>
@import "index.less";
</style>


<template>
    <div class="edituser" @keydown.enter="handleSubmit">
      <Form ref="editUserForm" :model="form" :rules="rules">
          <FormItem prop="memberName" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon user-icon"></em>
              <div class="item">
                <label><em>*</em>姓名</label>
                <input type="text" v-model="form.memberName"/>
              </div>
            </div>
          </FormItem>
          <FormItem prop="memberPhone" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon phone-icon"></em>
              <div class="item">
                <label><em>*</em>手机号</label>
                <input type="text" v-model="form.memberPhone"/>
              </div>
            </div>
          </FormItem>
          <FormItem prop="memberBirthday" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon bir-icon"></em>
              <div class="item">
                <label>生日</label>
                <DatePicker type="date" placeholder="选择生日" style="width: 200px" v-model="form.memberBirthday"></DatePicker>
              </div>
            </div>
          </FormItem>
          <FormItem prop="memberLevelId" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon  grade-icon"></em>
              <div class="item">
                <label>会员等级</label>
                <Select v-model="form.memberLevelId" style="width:200px">
                    <Option v-for="item in selectOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <!-- <XzSelect v-model="grade" :options="selectOptions" class="fr"></XzSelect> -->
              </div>
            </div>
          </FormItem>
          <div class="sub">
              <Button size="large" type="primary" long @click="handleSubmit">保存</Button>
            </div>
        </Form>
    </div>
</template>

<script>
import XzSelect from "../xz-select";
export default {
  name: "edit-user",
  components: {
    XzSelect
  },
  data() {
    return {
      form: {
        memberPhone: "",
        memberBirthday: "",
        memberLevelId: "",
        memberName: ""
      },
      rules: {
        memberPhone: [
          {
            required: true,
            message: "请填写正确格式的手机号",
            pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
            trigger: "blur"
          }
        ],
        // memberBirthday: [{ required: true, message: "请填写生日" }],
        // memberLevelId: [
        //   { required: true, message: "请设置等级", trigger: "blur" }
        // ],
        memberName: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ]
      },
      selectOptions: [
        { label: "普通", value: 0 },
        { label: "黄金", value: 1 },
        // { label: "黄金", value: "2" },
        // { label: "白金", value: "3" },
        // { label: "砖石", value: "4" }
      ]
    };
  },
  props: ["userData"],

  methods: {
    handleSubmit() {
      const _this = this;
      _this.$refs.editUserForm.validate(valid => {
        if (valid) {
          _this.$Spin.show();
          if (!_this.form.memberId) {
            _this.addMember();
          } else {
            _this.editMember();
          }
        }
      });
    },
    addMember() {
      const _this = this;
      _this.$http
        .post("/api/users/member/save", _this.form)
        .then(function(res) {
          const result = res.data;
          if (result.code === "200") {
            _this.$emit("success", {
              type: false,
              phone: _this.form.memberPhone
            });
            _this.$Spin.hide();
            _this.$Message.success("新增成功！");
          } else {
            _this.$Spin.hide();
            _this.$Message.error(result.message);
          }
        })
        .catch(function(error) {
          _this.$Spin.hide();
          _this.$Message.error("网络异常！");
        });
    },
    editMember() {
      const _this = this;
      _this.$http
        .post("/api/users/member/update", _this.form)
        .then(function(res) {
          const result = res.data;
          if (result.code === "200") {
            _this.$Message.success("修改成功！");
            _this.$Spin.hide();
            _this.$emit("success", {
              type: true,
              phone: _this.form.memberPhone
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
  watch: {
    userData: function() {
      if (this.userData) {
        this.form = JSON.parse(JSON.stringify(this.userData));
      } else {
        this.form = {
          memberPhone: "",
          memberBirthday: "",
          memberLevelId: "",
          memberName: ""
        };
      }
    }
  },
  mounted() {
    //console.log(this.currentUser,222);
  }
};
</script>
