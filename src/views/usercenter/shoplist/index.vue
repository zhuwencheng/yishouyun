<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="shoplist">
        <ShopCart :show="shopCartShow" @hide="shopCartShow=false" @submit="cartBalance"></ShopCart>
        <div class="leftmenu">
            <dl v-for="(item) in menuList" :key="item.id"  :class="{active:item.checked}">
                <dt @click="changeMenu(item)">{{item.name}}<em></em></dt>
                <dd v-for="(litem) in item.childList" :key="litem.id" @click="filterMenu(litem.id)">{{litem.name}}</dd>
            </dl>
        </div>
        <div class="ct">
            <div class="shopcart" @click="shopCartShow=true"></div>
            <div class="search">
                <input type="text" placeholder="搜索" v-model="menuFilter.searchKey" @keyup.enter="filterSearch"/>
            </div>
            <div class="bd">
                 <Scroll :on-reach-bottom="handleReachBottom" :distance-to-edge='distance' :height="scrollHeight" v-if="shopList.length>0">
                    <dl class="card" v-for="item in shopList" :key="item.id" @click="selectShop(item)">
                        <dt><img :src="item.primaryPicUrl" /></dt>
                        <dd>{{item.goodsName}}</dd>
                        <dd class="price">￥{{item.salePrice.toFixed(1)}}</dd>
                    </dl>
                 </Scroll>
            </div>
        </div>
        <!-- 商品配置弹窗 -->
          <Modal v-model="showShopCard" class="xz-model">
              <SpecCard v-model="specCardData"></SpecCard>
              <div slot="footer">
                  <Button size="large" type="primary" long >确认</Button>
              </div>
          </Modal>
          <!-- 订单详情配置 -->
          <Modal v-model="showOrdermodel" class="xz-model bl-header">
               <p slot="header" class="o-dhead">
                  <span class="l-icon"></span>
                  <span>奶茶小店 <em>（西直门凯德MAL店）</em></span>
              </p>
              <OrderDetail></OrderDetail>
              <div slot="footer">
                  <Button size="large" type="primary" long @click="toOrderConfirm">确认</Button>
              </div>
          </Modal>
          <!-- 订单确认页面 -->
          <Modal v-model="showConfirmModel" class="xz-model" :closable="false">
              <ConfirmOrder></ConfirmOrder>
              <div slot="footer" class="btw-footer">
                  <Button size="large" type="ghost">取消订单</Button>
                  <Button size="large" type="primary" @click="SubOrderConfirm">确认结账</Button>
              </div>
          </Modal>
          <!-- 订单详情配置 -->
          <Modal v-model="showPayType" class="xz-model bl-header">
               <p slot="header" class="o-dhead">
                  选择支付方式
              </p>
              <PayType @select="selectPayType"></PayType>
              <div slot="footer"></div>
          </Modal>
          <!-- 支付成功 -->
          <Modal v-model="showPayResult" class="xz-model">
              <PaySuc></PaySuc>
              <div slot="footer">
                <Button size="large" type="primary" long >确认并打印小票</Button>
              </div>
          </Modal>
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
import SpecCard from "./specCard"; //商品配置弹窗
import ShopCart from "./shopcart"; //购物车
import OrderDetail from "./orderDetail"; //订单详情配置
import ConfirmOrder from "./confirmOrder"; //订单详情配置
import PayType from "./payType"; //订单详情配置
import PaySuc from "./paySuc"; //订单详情配置
import AddUser from "../../my-components/edit-user/index"; //新增用户配置
export default {
  components: {
    SpecCard,
    ShopCart,
    OrderDetail,
    ConfirmOrder,
    PayType,
    PaySuc,
    AddUser
  },
  data() {
    return {
      distance: -100,
      showShopCard: false,
      shopCartShow: false,
      showOrdermodel: false,
      showConfirmModel: false,
      showPayType: false,
      showPayResult: false,
      addUserModel: false,
      scrollHeight: "100%",
      //查询条件
      menuFilter: {
        page_num: 1,
        categoryId: null,
        searchKey: "",
        page_size: 15
      },
      //查询条件end
      isEnd: false,
      menuList: [], //菜单数据
      shopList: [], //商品数据
      specCardData: {
        shopTitle: "01-招牌奶茶",
        num: 1,
        remark: [
          { name: "冰", id: 1 },
          { name: "冰", id: 2 },
          { name: "冰", id: 3 }
        ],
        imgUrl: "http://placeholder.qiniudn.com/270x270"
      }
    };
  },
  methods: {
    changeMenu(item) {
      if (item.checked) {
        item.checked = !item.checked;
      } else {
        this.$set(item, "checked", true);
      }
    },
    handleReachBottom() {
      const _this=this;
      if(_this.isEnd){
         _this.$Message.warning('已没有更多的内容了！');
      }else{
        _this.menuFilter=_this.menuFilter+1;
      }
    },
    selectShop() {
      this.showShopCard = true;
    },
    cartBalance() {
      this.shopCartShow = false;
      this.showOrdermodel = true;
    },
    toOrderConfirm() {
      this.showOrdermodel = false;
      this.showConfirmModel = true;
    },
    SubOrderConfirm() {
      this.showConfirmModel = false;
      this.showPayType = true;
    },
    selectPayType() {
      this.showPayType = false;
      this.showPayResult = true;
    },
    filterMenu(id) {
      const _this = this;
      //_this.menuFilter.categoryId = id;
      _this.menuFilter.page_num = 1;
      _this.menuFilter.searchKey = "";
      _this.isEnd = false;
      _this.queryList(true);
    },
    filterSearch() {
      const _this = this;
      _this.menuFilter.page_num = 1;
      _this.isEnd = false;
      _this.queryList(true);
    },
    queryList(isFirst) {
      //商品列表查询
      const _this = this;
      _this.$Spin.show();
      return new Promise(resolve => {
        _this.$http
          .post("/api/users/goods/list", _this.menuFilter)
          .then(function(res) {
            const result = res.data;
            if (result.code === "200") {
              _this.$Spin.hide();
              if (result.object.totalPage == result.object.currentPage) {
                _this.isEnd = true;
              }
              if (isFirst) {
                _this.shopList = result.object.object;
              } else {
                _this.shopList.push(result.object.object);
              }
            } else {
              _this.$Spin.hide();
              _this.$Message.error(result.message);
            }
            resolve();
          })
          .catch(function(error) {
            _this.$Spin.hide();
            _this.$Message.error("网络异常！");
            resolve();
          });
      });
    },
    queryMenu() {
      //菜单查询
      const _this = this;
      _this.$Spin.show();
      _this.$http
        .post("/api/users/goods/category/list")
        .then(function(res) {
          const result = res.data;
          if (result.code === "200") {
            _this.$Spin.hide();
            _this.menuList = result.object;
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
    const _this=this;
    this.queryMenu();
    window.setTimeout(function(){
      _this.queryList(true)
    },1000);
  }
};
</script>

<style>
.xz-model .ivu-modal-footer {
  border-top: 0;
  font-style: 16px;
  padding: 12px 58px 30px;
}
.xz-model .ivu-modal-close .ivu-icon-ios-close-empty {
  color: #058fff;
}
.xz-model .ivu-btn-large {
  padding: 12px 15px 12px;
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
  font-size: 20px !important;
  color: #fff !important;
  line-height: 40px !important;
  height: 40px !important;
}
.o-dhead em {
  font-size: 16px;
}
.bl-header .ivu-modal-close {
  top: 18px;
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
