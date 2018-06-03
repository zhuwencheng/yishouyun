<style lang="less" scoped>
@import "./index.less";
</style>

<template>
    <div class="orderDetail">
        <div class="form-group">
          <span class="confirm">确认</span>
          <span class="add">+</span>
          <label>会员手机号：</label>
          <input type="text" maxlength="11">
        </div>
        <div class="form-group">
          <label>备注</label>
          <textarea></textarea>
        </div>
        <div class="form-group">
          <label>下单时间：</label>
          <span>2018.04.45 14:22</span>
        </div>
        <h4><span>已购商品</span><em></em></h4>
        <div class="detail">
          <dl>
            <dt>招牌奶茶</dt>
            <dd>2</dd>
            <dd class="money">36.00</dd>
          </dl>
          <dl>
            <dt>招牌奶茶</dt>
            <dd>2</dd>
            <dd class="money">36.00</dd>
          </dl>
          <dl>
            <dt>招牌奶茶</dt>
            <dd>2</dd>
            <dd class="money">36.00</dd>
          </dl>
          <dl>
            <dt>招牌奶茶</dt>
            <dd>2</dd>
            <dd class="money">36.00</dd>
          </dl>
          <dl>
            <dt>招牌奶茶</dt>
            <dd>2</dd>
            <dd class="money">36.00</dd>
          </dl>
          <dl>
            <dt>招牌奶茶</dt>
            <dd>2</dd>
            <dd class="money">36.00</dd>
          </dl>
          <dl>
            <dt>招牌奶茶</dt>
            <dd>2</dd>
            <dd class="money">36.00</dd>
          </dl>
        </div>
        <div class="total">合计：<span>36.00元</span></div>
    </div>
    
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props:['value'],
  methods: {},
  mounted() {}
};
</script>

<style>
</style>
