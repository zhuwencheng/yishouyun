<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="vipmange">
        <div class="filter">
            <div class="form-set">
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" v-model="filterParams.memberName">
                </div>
                 <div class="form-group">
                    <label>手机号</label>
                    <input type="text" v-model="filterParams.memberPhone">
                </div>
                 <div class="form-group">
                    <label>生日</label>
                     <DatePicker type="date" placeholder="选择生日" v-model="filterParams.memberBirthday" class="auto-com"></DatePicker>
                </div>
                 <div class="form-group">
                    <label>等级</label>
                    <Select v-model="filterParams.memberLevelId" class="auto-com">
                        <Option v-for="item in selectOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
            </div>
            <div class="form-set">
               <div class="form-group">
                    <label>卡号</label>
                    <input type="text" v-model="filterParams.cardNumber">
                </div>
                <div class="form-group">
                    <label>时间范围</label>
                    <!-- <DatePicker type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker> -->
                    <DatePicker type="daterange" v-model="filterParams.dateArea" :startDate="startDate" placeholder="选择时间范围" class="auto-com" :options="dateOptions"></DatePicker>
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
                    <Button type="ghost" @click="queryFilter(true)">查询</Button>
                    <Button type="primary" @click="add">新增</Button>
                </div>
            </div>
        </div>
        <div class="content">
            <OTable :tabledata="tableData" @edit="edit"></OTable>
            <Page :total="total" show-elevator class="page" :current="filterParams.page_num" @on-change="changePage"></Page>
        </div>
        <!-- 新增用户 -->
          <Modal v-model="addUserModel" class="xz-model bl-header">
               <p slot="header" class="o-dhead">
                  新增/修改会员
              </p>
              <AddUser :userData="currentUser" @success="editSuc"></AddUser>
              <div slot="footer"></div>
          </Modal>
    </div>
    
</template>

<script>
import OTable from "./otable";
import XzSelect from "../../my-components/xz-select";
import AddUser from "../../my-components/edit-user/index"; //新增用户配置
// import Cookies from "js-cookie";
export default {
  components: {
    OTable,
    XzSelect,
    AddUser
  },
  data() {
    return {
      addUserModel: false, //新增用户
      total: 52,
      currentUser: null,
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      startDate: Date.now() - 24 * 60 * 60 * 1000 * 31,
      filterParams: {
        page_num: 1,
        page_size: Math.floor((document.body.clientHeight - 380) / 50),
        memberName: "",
        memberPhone: "",
        memberBirthday: "",
        memberLevelId: "",
        cardNumber: "",
        dateArea: []
      },
      selectOptions: [
        { label: "普通", value: 0 },
        { label: "黄金", value: 1 }
        // { label: "黄金", value: "2" },
        // { label: "白金", value: "3" },
        // { label: "钻石", value: "4" }
      ],
      tableData: []
    };
  },
  methods: {
    changePage(pageIndex) {
      const _this = this;
      _this.filterParams.page_num = pageIndex;
      _this.queryFilter();
    },
    edit(item) {
      this.currentUser = JSON.parse(JSON.stringify(item));
      this.addUserModel = true;
    },
    add() {
      this.currentUser = {
        memberPhone: "",
        memberBirthday: "",
        memberLevelId: "",
        memberName: ""
      };
      this.addUserModel = true;
    },
    queryFilter(isFilter) {
      let _this = this,params;
      isFilter ? (_this.filterParams.page_num = 1) : "";
      _this.$Spin.show();
      if(typeof isFilter!=="boolean"){
        params={
          page_num: 1,
          page_size: Math.floor((document.body.clientHeight - 380) / 50),
        }
      }else{
        params=_this.filterParams;
      }
      this.$http
        .post("/api/users/member/list", _this.filterParams)
        //.post("http://erp.ipaynow.cn/users/login", params)
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
    },
    editSuc(options) {
      const _this = this;
      _this.addUserModel = false;
      if (options.type) {
        _this.queryFilter();
      } else {
        _this.queryFilter({ isAdd: true });
      }
    }
  },
  mounted() {
    console.log(this.tableData);
  },
  created() {
    this.queryFilter();
  }
};
</script>

<style>
.xz-model .ivu-modal-footer {
  border-top: 0;
  font-style: 16px;
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
