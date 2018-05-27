<style lang="less" scoped>
@import "index.less";
</style>


<template>
    <div class="xz-select">
        <em class="up" @click="change(-1)" title="up"></em>
        <em class="down" @click="change(1)" title="down"></em>
        <ul :style="{ marginTop: -currentIndex*38+ 'px' }">
            <li v-for="(item,i) in options" :key="i">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "xz-select",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: ["value", "options"],

  methods: {
    change(num) {
      var a = this.currentIndex + num;
      if (a < 0) {
        a = 0;
      }
      if (a >= this.options.length) {
        a = this.options.length - 1;
      }
      this.currentIndex = a;
      this.$emit('input',this.options[this.currentIndex].value);
    }
  },
  mounted() {}
};
</script>
