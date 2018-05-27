<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="order">
        <div class="filter">
            <div class="form-set">
                <div class="form-group">
                    <label>交易流水号</label>
                    <input type="text">
                </div>
                 <div class="form-group">
                    <label>会员手机号</label>
                    <input type="text">
                </div>
                 <div class="form-group">
                    <label>交易方式</label>
                    <XzSelect v-model="jyType" :options="selectOptions" class="o-select"></XzSelect>
                </div>
                 <div class="form-group">
                    <label>交易状态</label>
                    <XzSelect v-model="jyType" :options="selectOptions" class="o-select"></XzSelect>
                </div>
            </div>
            <div class="form-set">
                <div class="form-group">
                    <label>开始时间</label>
                    <DatePicker type="date" placeholder="Select date"></DatePicker>
                </div>
                 <div class="form-group">
                    <label>结束时间</label>
                    <DatePicker type="date" placeholder="Select date"></DatePicker>
                </div>
                 <div class="form-group">
                    <label>门店</label>
                    <input type="text">
                </div>
                 <div class="form-group n-b">
                    <span>统计</span>
                    <span>查询</span>
                </div>
            </div>
        </div>
        <div class="content">
            <OTable :tabledata="tableData"></OTable>
            <Page :total="100" show-elevator class="page" :current="pageIndex" @on-change="changePage"></Page>
        </div>
    </div>
    
</template>

<script>
import OTable from "./otable";
import XzSelect from "../../my-components/xz-select";
// import Cookies from "js-cookie";
export default {
  components: {
    OTable,
    XzSelect
  },
  data() {
    return {
        tableData:[
            {time:'2017-01-01 16:22',mcode:'142133253252',orderNo:'asdfdsafdsafdasfds',phone:'15927216320',type:'微信',price:'36.00',status:'成功'},
            {time:'2017-01-02 16:22',mcode:'142133253252',orderNo:'asdfdsafdsafdasfds',phone:'15927216320',type:'支付宝',price:'36.00',status:'成功'},
            {time:'2017-01-03 16:22',mcode:'142133253252',orderNo:'asdfdsafdsafdasfds',phone:'15927216320',type:'微信',price:'36.00',status:'成功'},
            {time:'2017-01-04 16:22',mcode:'142133253252',orderNo:'asdfdsafdsafdasfds',phone:'15927216320',type:'微信',price:'36.00',status:'成功'},
            {time:'2017-01-05 16:22',mcode:'142133253252',orderNo:'asdfdsafdsafdasfds',phone:'15927216320',type:'微信',price:'36.00',status:'成功'}
        ],
        pageIndex:2,
        jyType:'1',
        selectOptions: [
        { label: "前台收银", value: "0" },
        { label: "订单管理", value: "1" },
        { label: "会员管理", value: "2" }
      ]
    };
  },
  methods: {
      changePage(){
          console.log('页数改变')
      }
  },
  mounted(){
      console.log(this.tableData)
  }
};
</script>

<style>
</style>
