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
        <div class="tr" v-for="(item) in tabledata" :key="item.orderNumber">
            <div class="td" :title="item.createTimeStr">{{item.createTimeStr}}</div>
            <div class="td" :title="item.account">{{item.account}}</div>
            <div class="td" :title="item.orderNumber">{{item.orderNumber}}</div>
            <div class="td" :title="item.memberPhone">{{item.memberPhone}}</div>
            <div class="td" :title="item.paywayName">{{item.paywayName}}</div>
            <div class="td" :title="item.orderAmount">{{item.orderAmount}}</div>
            <div class="td">
                <span v-if="item.orderStatus===0" class="blue">进行中</span>
                <span v-if="item.orderStatus===1">成功</span>
                <span v-if="item.orderStatus===2" class="blue">取消订单</span>
                <span v-if="item.orderStatus===3" class="red">支付异常</span>    
            </div>
            <div class="td toolbtn">
                <span @click="readDetail(item)">查看详情</span>
                <span @click="print(item)" :class="{disabled:item.orderStatus!==1}">补打</span>
            </div>
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
          this.$emit('readMore',item);
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
