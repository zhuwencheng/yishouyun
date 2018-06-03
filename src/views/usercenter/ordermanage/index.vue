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
        <!-- 订单详情 -->
        <Modal v-model="orderDetailModel" class="xz-model bl-header">
            <p slot="header" class="o-dhead">
              订单详情
            </p>
            <div class="orderDetail">
              <table>
                <tr>
                  <td class="w30">交椅门店号</td>
                  <td>13567890086755</td>
                </tr>
                <tr>
                  <td class="w30">交易时间</td>
                  <td>2018.4.22 16:32</td>
                </tr>
                <tr>
                  <td class="w30">交易流水号</td>
                  <td>12345678900</td>
                </tr>
                <tr>
                  <td class="w30">会员手机号</td>
                  <td>1243566879</td>
                </tr>
                <tr>
                  <td class="w30">交易方式</td>
                  <td>微信</td>
                </tr>
                <tr>
                  <td class="w30">交易金额</td>
                  <td>36.00</td>
                </tr>
                <tr>
                  <td class="w30">交易状态</td>
                  <td>成功</td>
                </tr>
                <tr>
                  <td class="w30">已购商品</td>
                  <td>招牌奶茶（冰）*2</td>
                </tr>
                <tr>
                  <td class="w30">优惠详情</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="w30">备注</td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div slot="footer">
              <Button size="large" type="primary" long >保存</Button>
            </div>
        </Modal>
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
      orderDetailModel:true,
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
.xz-model .ivu-modal-footer{
  border-top: 0;
  font-style: 16px;
  padding: 12px 58px 30px;
} 
.xz-model .ivu-modal-close .ivu-icon-ios-close-empty {
  color: #058FFF;
}
.xz-model .ivu-btn-large{
  padding: 12px 15px 12px;
  font-size: 16px;
}
.ivu-tooltip-inner{
  color: #333;
  background: #fff;
}
.ivu-tooltip-popper[x-placement^=bottom] .ivu-tooltip-arrow{
  border-bottom-color: #ccc;
}
.ivu-scroll-wrapper,.ivu-scroll-container{
  height: 100%;
}
.bl-header .ivu-modal-header{
  background: #058fff;
  color: #fff;
  text-align: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 0;
}
.bl-header .ivu-modal-close .ivu-icon-ios-close-empty {
    color: #fff;
}
.o-dhead{
  font-size: 20px !important;
  color: #fff !important;
  line-height: 40px !important;
  height: 40px !important;
}
.o-dhead em{
  font-size:16px;
}
.bl-header .ivu-modal-close{
  top: 18px;
}
.o-dhead .l-icon{
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background: url(../../../images/nc-icon-f.png) no-repeat center center;
  margin-right: 10px;
  display: inline-block;
}
.btw-footer{
  display: flex;
  justify-content: space-between;
}
</style>
