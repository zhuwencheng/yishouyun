<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="table">
        <div class="tr">
            <div class="th">姓名</div>
            <div class="th">手机号</div>
            <div class="th">卡号</div>
            <div class="th">入会时间</div>
            <div class="th">等级</div>
            <div class="th">生日</div>
            <div class="th">操作</div>
        </div>
        <div class="tr" v-for="(item) in tabledata" :key="item.memberId">
            <div class="td">{{item.memberName}}</div>
            <div class="td">{{item.memberPhone}}</div>
            <div class="td"></div>
            <div class="td">{{item.createTime}}</div>
            <div class="td">{{item.memberLevelId}}</div>
            <div class="td">{{item.memberBirthday}}</div>
            <div class="td toolbtn"><span @click="edit(item)">修改</span></div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: "otable",
  data() {
    return {};
  },
  props: ["tabledata"],
  methods: {
    edit(item) {
      this.$emit("edit", item);
    }
  },
  mounted() {
    console.log(this.tabledata);
  }
};
</script>

<style>
</style>
