<style lang="less" scoped>
@import "index.less";
</style>


<template>
    <div class="xz-input-number">
        <em :class="{up:true,disabled:!(value>1)}" @click="change(-1)" title="up">-</em>
        <input type="text" @input="inputChage" :value="value" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"/>
        <em class="down" @click="change(1)" title="down">+</em>
    </div>
</template>

<script>
export default {
  name: "xz-select",
  data() {
    return {
      //currentIndex: 0
    };
  },
  props: ["value"],

  methods: {
    change(num) {
      if(this.value<2&&num<1){
        return;
      }
      var a = this.value + num;
      if (a < 0) {
        a = 0;
      }
      this.$emit("input", a);
      this.$emit('change');
    },
    inputChage(e) {
      const value=parseFloat(e.target.value);
      if(typeof value=='number'&& value!==this.value){
        this.$emit("input", value);
        this.$emit('change');
      }else{
        e.target.value=this.value;
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>
