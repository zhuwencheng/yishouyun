<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="shoplist">
        <div class="leftmenu">
            <dl v-for="(item,i) in menuList" :key="i"  :class="{active:item.checked}">
                <dt @click="changeMenu(item)">{{item.title}}<em></em></dt>
                <dd v-for="(litem,index) in item.children" :key="index+'asdb'">{{litem.title}}</dd>
            </dl>
        </div>
        <div class="ct">
            <div class="shopcart"></div>
            <div class="search">
                <input type="text" placeholder="搜索" />
            </div>
            <div class="bd">
                 <Scroll :on-reach-bottom="handleReachBottom" :distance-to-edge='distance'>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                    <dl class="card">
                        <dt><img src="http://iph.href.lu/270x270" /></dt>
                        <dd>招牌奶茶</dd>
                        <dd class="price">￥20.00</dd>
                    </dl>
                 </Scroll>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  components: {},
  data() {
    return {
      distance:-100,
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
      ]
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
    handleReachBottom(){
        console.log(111)
    }
  },
  mounted() {}
};
</script>

<style>
</style>
