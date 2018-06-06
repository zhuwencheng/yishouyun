<style lang="less" scoped>
</style>


<template>
    <span @click="send" :class="{disabled:isSending}">
        {{text}}
    </span>
</template>

<script>
export default {
  name: "xz-select",
  data() {
    return {
      text: "发送验证码",
      isSending: false,
      time: 60
    };
  },
  props: [],

  methods: {
    send() {
      const _this = this;
      if (!_this.isSending) {
        this.isSending = true;
        _this.text = _this.time + "s后重新发送";
        _this.$emit('send');
        const timer = window.setInterval(function() {
          if (_this.time > 0) {
            _this.time = _this.time - 1;
            _this.text = _this.time + "s后重新发送";
          } else {
            clearInterval(timer);
            _this.time = 60;
            _this.text = "发送验证码";
            _this.isSending = false;
          }
        }, 1000);
      }
    }
  },
  mounted() {}
};
</script>
