<style lang="less" scoped>
@import "index.less";
</style>


<template>
    <div class="edituser" @keydown.enter="handleSubmit">
      <Form ref="editUserForm" :model="form" :rules="rules">
          <FormItem prop="userName" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon user-icon"></em>
              <div class="item">
                <label><em>*</em>姓名</label>
                <input type="text" v-model="form.userName"/>
              </div>
            </div>
          </FormItem>
          <FormItem prop="phone" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon phone-icon"></em>
              <div class="item">
                <label><em>*</em>手机号</label>
                <input type="text" v-model="form.phone"/>
              </div>
            </div>
          </FormItem>
          <FormItem prop="birthday" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon bir-icon"></em>
              <div class="item">
                <label>生日</label>
                <DatePicker type="date" placeholder="选择生日" style="width: 200px" v-model="form.birthday"></DatePicker>
              </div>
            </div>
          </FormItem>
          <FormItem prop="grade" class="reset-ivu-form-item">
            <div class="form-group">
              <em class="icon  grade-icon"></em>
              <div class="item">
                <label>会员等级</label>
                <Select v-model="form.grade" style="width:200px">
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
        phone: "",
        birthday: "",
        grade: "",
        userName: ""
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
        birthday: [
          { required: true, message: "请填写生日"}
        ],
        grade: [
          { required: true, message: "请设置等级", trigger: "blur" }
        ],
        userName: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ]
      },
      selectOptions: [
        { label: "青铜", value: "0" },
        { label: "白银", value: "1" },
        { label: "黄金", value: "2" },
        { label: "白金", value: "3" },
        { label: "砖石", value: "4" }
      ]
    };
  },
  props: ["userData"],

  methods: {
    handleSubmit() {
      this.$refs.editUserForm.validate(valid => {
        if (valid) {
          this.$Message.success("成功提示！");
        }
      });
    },
  },
  watch:{
      userData:function(){
        if(this.userData){
           this.form=JSON.parse(JSON.stringify(this.userData));
        }else{
          this.form={
            phone: "",
            birthday: "",
            grade: "",
            userName: ""
          }
        }
         
      }
  },
  mounted() {
    //console.log(this.currentUser,222);
  }
};
</script>
