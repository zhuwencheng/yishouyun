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
                    <XzSelect v-model="filterType" :options="typeSelectOptions" class="o-select"></XzSelect>
                </div>
                 <div class="form-group">
                    <label>交易状态</label>
                    <XzSelect v-model="jyType" :options="statusSelectOptions" class="o-select"></XzSelect>
                </div>
            </div>
            <div class="form-set">
                <div class="form-group">
                    <label>时间范围</label>
                    <DatePicker type="daterange" placement="bottom-end" placeholder="选择时间范围"></DatePicker>
                </div>
                 <!-- <div class="form-group">
                    <label>结束时间</label>
                    <DatePicker type="date" placeholder="Select date"></DatePicker>
                </div> -->
                 <div class="form-group">
                    <label>门店</label>
                    <input type="text">
                </div>
                <div class="form-group n-b">
                    <!-- <label>门店</label>
                    <input type="text"> -->
                </div>
                 <div class="form-group n-b">
                    <Button type="ghost">统计</Button>
                   <Button type="primary">查询</Button>
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
      tableData: [
        {
          time: "2017-01-01 16:22",
          mcode: "142133253252",
          orderNo: "asdfdsafdsafdasfds",
          phone: "15927216320",
          type: "微信",
          price: "36.00",
          status: "成功"
        },
        {
          time: "2017-01-02 16:22",
          mcode: "142133253252",
          orderNo: "asdfdsafdsafdasfds",
          phone: "15927216320",
          type: "支付宝",
          price: "36.00",
          status: "成功"
        },
        {
          time: "2017-01-03 16:22",
          mcode: "142133253252",
          orderNo: "asdfdsafdsafdasfds",
          phone: "15927216320",
          type: "微信",
          price: "36.00",
          status: "成功"
        },
        {
          time: "2017-01-04 16:22",
          mcode: "142133253252",
          orderNo: "asdfdsafdsafdasfds",
          phone: "15927216320",
          type: "微信",
          price: "36.00",
          status: "成功"
        },
        {
          time: "2017-01-05 16:22",
          mcode: "142133253252",
          orderNo: "asdfdsafdsafdasfds",
          phone: "15927216320",
          type: "微信",
          price: "36.00",
          status: "成功"
        }
      ],
      pageIndex: 2,
      //交易方式
      filterType: "1",
      typeSelectOptions: [
        { label: "全部", value: "0" },
        { label: "微信", value: "1" },
        { label: "支付宝", value: "2" },
        { label: "银行卡", value: "3" },
        { label: "现金", value: "4" }
      ],
      //交易状态
      filterStatus: "1",
      statusSelectOptions: [
        { label: "全部", value: "0" },
        { label: "已完成", value: "1" },
        { label: "交易异常", value: "2" },
        { label: "取消订单", value: "3" }
      ]
    };
  },
  methods: {
    changePage() {
      console.log("页数改变");
    }
  },
  mounted() {
    console.log(this.tableData);
  }
};
</script>

<style>
</style>
