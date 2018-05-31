<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="shoplist">
        <div class="leftmenu">
            <dl>
                <dt class="active">果茶系列<em></em></dt>
                <dd>热饮系列</dd>
                <dd>热饮系列</dd>
                <dd>热饮系列</dd>
            </dl>
            <dl>
                <dt>果茶系列</dt>
                <dd>热饮系列</dd>
                <dd>热饮系列</dd>
                <dd>热饮系列</dd>
            </dl>
            <dl>
                <dt>果茶系列</dt>
                <dd>热饮系列</dd>
                <dd>热饮系列</dd>
                <dd>热饮系列</dd>
            </dl>
        </div>
        <div class="ct"></div>
    </div>
    
</template>

<script>
export default {
  components: {
   
  },
  data() {
    return {
      menuList:[
          {
              title:'果茶系列',
              children:[
                  {
                      title:'子类',
                      id:'001'
                  }
              ]
          }
      ]
    };
  },
  methods: {
    
  },
  mounted() {
    
  }
};
</script>

<style>
</style>
