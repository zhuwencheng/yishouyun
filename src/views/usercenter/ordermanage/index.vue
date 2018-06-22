<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="order">
        <div class="filter">
            <div class="form-set">
                <div class="form-group">
                    <label>交易流水号</label>
                    <input type="text" v-model="filterParams.orderNumber" />
                </div>
                 <div class="form-group">
                    <label>会员手机号</label>
                    <input type="text" v-model="filterParams.memberPhone" />
                </div>
                 <div class="form-group">
                    <label>交易方式</label>
                    <Select v-model="filterParams.paywayCode" class="auto-com">
                        <Option v-for="item in typeSelectOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <!-- <XzSelect v-model="filterParams.paywayCode" :options="typeSelectOptions" class="o-select"></XzSelect> -->
                </div>
                 <div class="form-group">
                    <label>交易状态</label>
                    <Select v-model="filterParams.orderStatus" class="auto-com">
                        <Option v-for="item in statusSelectOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <!-- <XzSelect v-model="filterParams.orderStatus" :options="statusSelectOptions" class="o-select"></XzSelect> -->
                </div>
            </div>
            <div class="form-set">
                <div class="form-group">
                    <label>时间范围</label>
                    <DatePicker type="daterange" v-model="filterParams.dateArea" placeholder="选择时间范围" class="auto-com" :options="dateOptions"></DatePicker>
                </div>
                 <!-- <div class="form-group">
                    <label>结束时间</label>
                    <DatePicker type="date" placeholder="Select date"></DatePicker>
                </div> -->
                 <div class="form-group">
                    <label>门店</label>
                    <input type="text" v-model="filterParams.account">
                </div>
                <div class="form-group n-b">
                    <!-- <label>门店</label>
                    <input type="text"> -->
                </div>
                 <div class="form-group n-b">
                    <!-- <Button type="ghost">统计</Button> -->
                   <Button type="primary" @click="queryFilter(true)">查询</Button>
                </div>
            </div>
        </div>
        <div class="content">
            <OTable :tabledata="tableData" @readMore="readOrderDetail"></OTable>
            <Page :total="total" :page-size="filterParams.page_size" show-elevator class="page" :current="filterParams.page_num" @on-change="changePage"></Page>
        </div>
        <!-- 订单详情 -->
        <Modal v-model="orderDetailModel" class="xz-model bl-header">
            <p slot="header" class="o-dhead">
              订单详情
            </p>
            <div class="orderDetail">
              <table v-if="orderInfo">
                <tr>
                  <td class="w30">交易门店号</td>
                  <td>{{orderInfo.account}}</td>
                </tr>
                <tr>
                  <td class="w30">交易时间</td>
                  <td>{{orderInfo.createTimeStr}}</td>
                </tr>
                <tr>
                  <td class="w30">交易流水号</td>
                  <td>{{orderInfo.orderNumber}}</td>
                </tr>
                <tr>
                  <td class="w30">会员手机号</td>
                  <td>{{orderInfo.memberPhone}}</td>
                </tr>
                <tr>
                  <td class="w30">交易方式</td>
                  <td>{{orderInfo.paywayName}}</td>
                </tr>
                <tr>
                  <td class="w30">交易金额</td>
                  <td>{{orderInfo.orderAmount.toFixed(2)}}</td>
                </tr>
                <tr>
                  <td class="w30">交易状态</td>
                  <td>
                    <span v-if="orderInfo.orderStatus===0" class="blue">进行中</span>
                    <span v-if="orderInfo.orderStatus===1">成功</span>
                    <span v-if="orderInfo.orderStatus===2" class="blue">取消订单</span>
                    <span v-if="orderInfo.orderStatus===3" class="red">支付异常</span>    
                  </td>
                </tr>
                <tr>
                  <td class="w30">已购商品</td>
                  <td class="goodslist">
                    <p v-for="item in orderItems" :key="item.orderId">
                        {{item.goodsName}}<span v-if="item.remark">（{{item.remark}}）</span>*{{item.goodsNumber}}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="w30">优惠详情</td>
                  <td>
                    {{(orderInfo.orderAmount-orderInfo.payAmount).toFixed(2)}}
                  </td>
                </tr>
                <tr>
                  <td class="w30">备注</td>
                  <td>{{orderInfo.remark}}</td>
                </tr>
              </table>
            </div>
            <div slot="footer">
              <Button size="large" type="primary" long @click="orderDetailModel=false">确认</Button>
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
      orderDetailModel: false,
      orderInfo: null,
      orderItems: null,
      total: 53,
      filterParams: {
        page_num: 1,
        orderNumber: "",
        page_size: Math.floor((document.body.clientHeight - 380) / 50),
        memberPhone: "",
        paywayCode: "",
        orderStatus: "",
        dateArea: [],
        account: ""
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      tableData: [],
      typeSelectOptions: [
        { label: "全部", value: "100" },
        { label: "微信", value: "weixin" },
        { label: "支付宝", value: "aliPay" },
        { label: "银行卡", value: "bankCard" },
        { label: "现金", value: "cash" },
        { label: "其他支付", value: "others" }
      ],
      statusSelectOptions: [
        { label: "全部", value: "100" },
        { label: "进行中", value: 0 },
        { label: "已完成", value: 1 },
        { label: "交易异常", value: 3 },
        { label: "取消订单", value: 2 }
      ]
    };
  },
  methods: {
    changePage(pageIndex) {
      const _this = this;
      _this.filterParams.page_num = pageIndex;
      _this.queryFilter();
    },
    readOrderDetail(item) {
      const _this = this;
      _this.$Spin.show();
      _this.$http
        .post("/api/users/orderItem/detailList", {
          orderId: item.orderId
        })
        .then(function(res) {
          const result = res.data;
          if (result.code === "200") {
            _this.$Spin.hide();
            _this.orderInfo = result.object.orderInfo;
            _this.orderItems = result.object.orderItems;
            _this.orderDetailModel = true;
          } else {
            _this.$Spin.hide();
            _this.$Message.error(result.message);
          }
        })
        .catch(function(error) {
          _this.$Spin.hide();
          _this.$Message.error("网络异常！");
        });
      //this.orderDetailModel = true;
    },
    queryFilter(isFilter) {
      const _this = this;
      isFilter ? (_this.filterParams.page_num = 1) : "";
      _this.$Spin.show();
      this.$http
        .post("/api/users/orderinfo/list", _this.filterParams)
        .then(function(res) {
          const result = res.data;
          if (result.code === "200") {
            _this.$Spin.hide();
            _this.tableData = result.object.object;
            _this.total = result.object.totalRecord;
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
  mounted() {
    console.log(this.tableData);
  },
  created() {
    const _this = this;
    _this.queryFilter();
  }
};
</script>

<style>
.xz-model .ivu-modal-footer {
  border-top: 0;
  font-style: 16px;
  padding: 0 56px 25px;
}
.xz-model .ivu-modal-close .ivu-icon-ios-close-empty {
  color: #058fff;
}
.xz-model .ivu-btn-large {
  padding: 8px 15px 8px;
  font-size: 16px;
}
.ivu-tooltip-inner {
  color: #333;
  background: #fff;
}
.ivu-tooltip-popper[x-placement^="bottom"] .ivu-tooltip-arrow {
  border-bottom-color: #ccc;
}
.ivu-scroll-wrapper,
.ivu-scroll-container {
  height: 100%;
}
.bl-header .ivu-modal-header {
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
.o-dhead {
  font-size: 16px !important;
  color: #fff !important;
  line-height: 25px !important;
  height: 25px !important;
}
.o-dhead em {
  font-size: 16px;
}
.bl-header .ivu-modal-close {
  top: 11px;
}
.o-dhead .l-icon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  background: url(../../../images/nc-icon-f.png) no-repeat center center;
  margin-right: 10px;
  display: inline-block;
}
.btw-footer {
  display: flex;
  justify-content: space-between;
}
</style>
