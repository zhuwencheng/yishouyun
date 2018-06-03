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
        <div class="tr" v-for="(item) in tabledata" :key="item.orderNo">
            <div class="td">{{item.time}}</div>
            <div class="td">{{item.mcode}}</div>
            <div class="td">{{item.orderNo}}</div>
            <div class="td">{{item.phone}}</div>
            <div class="td">{{item.type}}</div>
            <div class="td">{{item.price}}</div>
            <div class="td toolbtn"><span @click="edit">修改</span></div>
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
      edit(){
          this.$emit('edit');
      }
  },
  mounted(){
      console.log(this.tabledata)
  }
};
</script>

<style>
</style>
