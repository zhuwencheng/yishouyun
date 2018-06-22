<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="speccard">
        <div class="hd">{{value.goodsName}}</div>
        <div class="img">
          <img :src="value.primaryPicUrl" alt="">
        </div>
        <div class="choose-num">
          <label>数量</label>
          <InputNumber v-model="value.num"/>
        </div>
        <div class="remarks">
          <label>备注</label>
          <div class="remark-bd">
              <span :class="{checked:item.checked}" v-for="(item) in value.goodsRemarkList" :key="item.remarkId" @click="changeRemark(item)">{{item.remarkName}}</span>
          </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import InputNumber from "../../my-components/InputNumber"; //新增用户配置
export default {
  components: {
    InputNumber
  },
  data() {
    return {
      // specData: this.value,
      //num: 1
    };
  },
  props: ["value"],
  methods: {
    changeRemark(item) {
      if (typeof item.checked === "undefined") {
        this.$set(item, "checked", true);
      } else {
        item.checked = !item.checked;
      }
    },
    ...mapActions("app", ["addProductToCart"])
  },
  created() {
    console.log("created");
    this.$set(this.value, "num", 1);
  },
  watch: {
    value(newval) {
      if (typeof newval.num === "undefined") {
        this.$set(newval, "num", 1);
      }
    }
  }
};
</script>

<style>
</style>
