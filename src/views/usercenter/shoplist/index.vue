<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="shoplist">
        <ShopCart :show="shopCartShow" @hide="shopCartShow=false"></ShopCart>
        <div class="leftmenu">
            <dl v-for="(item,i) in menuList" :key="i"  :class="{active:item.checked}">
                <dt @click="changeMenu(item)">{{item.title}}<em></em></dt>
                <dd v-for="(litem,index) in item.children" :key="index+'asdb'">{{litem.title}}</dd>
            </dl>
        </div>
        <div class="ct">
            <div class="shopcart" @click="shopCartShow=true"></div>
            <div class="search">
                <input type="text" placeholder="搜索" />
            </div>
            <div class="bd">
                 <Scroll :on-reach-bottom="handleReachBottom" :distance-to-edge='distance' :height="scrollHeight">
                    <dl class="card" v-for="item in shopList" :key="item.id">
                        <dt><img :src="item.imgUrl" /></dt>
                        <dd>{{item.title}}</dd>
                        <dd class="price">￥{{item.price.toFixed(1)}}</dd>
                    </dl>
                 </Scroll>
            </div>
        </div>
           <Modal v-model="showShopCard" class="xz-model">
              <SpecCard v-model="specCardData"></SpecCard>
              <div slot="footer">
                  <Button size="large" type="primary" long >确认</Button>
              </div>
          </Modal>
    </div>
    
</template>

<script>
import SpecCard from './specCard';
import ShopCart from './shopcart';
export default {
  components: {
    SpecCard,
    ShopCart
  },
  data() {
    return {
      distance: -100,
      showShopCard:false,
      scrollHeight:'100%',
      shopCartShow:false,
      menuList: [
        {
          title: "果茶系列",
          children: [
            {
              title: "子类1",
              id: "001"
            },
            {
              title: "子类2",
              id: "001"
            },
            {
              title: "子类3",
              id: "001"
            }
          ]
        },
        {
          title: "果茶系列2",
          children: [
            {
              title: "子类1",
              id: "001"
            },
            {
              title: "子类2",
              id: "001"
            },
            {
              title: "子类3",
              id: "001"
            }
          ]
        },
        {
          title: "果茶系列3",
          children: [
            {
              title: "子类1",
              id: "001"
            },
            {
              title: "子类2",
              id: "001"
            },
            {
              title: "子类3",
              id: "001"
            }
          ]
        }
      ],
      shopList: Array.apply(null, { length: 20 }).map((item, index) => {
        return {
          imgUrl: "http://iph.href.lu/270x270",
          id: index,
          price: 20 + index,
          title: "招牌奶茶" + index
        };
      }),
      specCardData:{
        shopTitle:'01-招牌奶茶',
        num:1,
        remark:[
          {name:'冰',id:1},
          {name:'冰',id:2},
          {name:'冰',id:3}
        ],
        imgUrl:'http://iph.href.lu/270x270'
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
      console.log(111);
    }
  },
  mounted() {}
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
</style>
