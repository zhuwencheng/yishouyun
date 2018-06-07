<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="table">
        <div class="tr">
            <div class="th">交易时间</div>
            <div class="th">交易门店</div>
            <div class="th">交易流水号</div>
            <div class="th">会员手机号</div>
            <div class="th">交易方式</div>
            <div class="th">交易金额</div>
            <div class="th">交易状态</div>
            <div class="th">操作</div>
        </div>
        <div class="tr" v-for="(item) in tabledata" :key="item.orderNo">
            <div class="td">{{item.time}}</div>
            <div class="td">{{item.mcode}}</div>
            <div class="td">{{item.orderNo}}</div>
            <div class="td">{{item.phone}}</div>
            <div class="td">{{item.type}}</div>
            <div class="td">{{item.price}}</div>
            <div class="td">{{item.status}}</div>
            <div class="td toolbtn"><span @click="readDetail(item)">查看详情</span><span @click="print(item)">补打</span></div>
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
      readDetail(item){
          this.$emit('readMore');
      },
      print(item){
          this.$Message.success("补打内容");
      }
  },
  mounted(){
      //console.log(this.tabledata)
  }
};
</script>

<style>
</style>
