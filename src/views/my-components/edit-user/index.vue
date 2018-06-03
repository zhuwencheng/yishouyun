<style lang="less" scoped>
@import "index.less";
</style>


<template>
    <div class="edituser">
        <div class="form-group">
          <em class="icon user-icon"></em>
          <div class="item">
            <label><em>*</em>姓名</label>
            <input type="text" />
          </div>
        </div>
        <div class="form-group">
          <em class="icon phone-icon"></em>
          <div class="item">
            <label><em>*</em>手机号</label>
            <input type="text" />
          </div>
        </div>
        <div class="form-group">
          <em class="icon bir-icon"></em>
          <div class="item">
            <label>生日</label>
            <input type="text" />
          </div>
        </div>
        <div class="form-group">
          <em class="icon  grade-icon"></em>
          <div class="item">
            <label>会员等级</label>
            <XzSelect v-model="grade" :options="selectOptions" class="fr"></XzSelect>
          </div>
        </div>
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
      grade:'',
      selectOptions: [
        { label: "青铜", value: "0" },
        { label: "白银", value: "1" },
        { label: "黄金", value: "2" },
        { label: "白金", value: "3" },
        { label: "砖石", value: "4" }
      ],
    };
  },
  props: ["value", "options"],

  methods: {
    change(num) {
      var a = this.currentIndex + num;
      if (a < 0) {
        a = 0;
      }
      if (a >= this.options.length) {
        a = this.options.length - 1;
      }
      this.currentIndex = a;
      this.$emit("input", this.options[this.currentIndex].value);
    }
  },
  mounted() {}
};
</script>
