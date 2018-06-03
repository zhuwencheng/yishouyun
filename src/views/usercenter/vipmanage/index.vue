<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="vipmange">
        <div class="filter">
            <div class="form-set">
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text">
                </div>
                 <div class="form-group">
                    <label>手机号</label>
                    <input type="text">
                </div>
                 <div class="form-group">
                    <label>生日</label>
                    <input type="text">
                </div>
                 <div class="form-group">
                    <label>等级</label>
                    <input type="text">
                </div>
            </div>
            <div class="form-set">
               <div class="form-group">
                    <label>卡号</label>
                    <input type="text">
                </div>
                <div class="form-group">
                    <label>时间范围</label>
                    <DatePicker type="daterange" placement="bottom-end" placeholder="选择时间范围"></DatePicker>
                </div>
                 <!-- <div class="form-group">
                    <label>结束时间</label>
                    <DatePicker type="date" placeholder="Select date"></DatePicker>
                </div> -->
                
                <div class="form-group n-b">
                    <!-- <label>门店</label>
                    <input type="text"> -->
                </div>
                 <div class="form-group n-b">
                    <Button type="ghost">查询</Button>
                   <Button type="primary" @click="edit">新增</Button>
                </div>
            </div>
        </div>
        <div class="content">
            <OTable :tabledata="tableData" @edit="edit"></OTable>
            <Page :total="100" show-elevator class="page" :current="pageIndex" @on-change="changePage"></Page>
        </div>
        <!-- 新增用户 -->
          <Modal v-model="addUserModel" class="xz-model bl-header">
               <p slot="header" class="o-dhead">
                  新增/修改会员
              </p>
              <AddUser></AddUser>
              <div slot="footer">
                <Button size="large" type="primary" long >保存</Button>
              </div>
          </Modal>
    </div>
    
</template>

<script>
import OTable from "./otable";
import XzSelect from "../../my-components/xz-select";
import AddUser from '../../my-components/edit-user/index';//新增用户配置
// import Cookies from "js-cookie";
export default {
  components: {
    OTable,
    XzSelect,
    AddUser
  },
  data() {
    return {
      addUserModel:false,
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
    };
  },
  methods: {
    changePage() {
      console.log("页数改变");
    },
    edit(){
      this.addUserModel=true;
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
