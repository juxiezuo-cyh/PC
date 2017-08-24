<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      <div class="button" @click="checkStatus">支付成功</div>
      <div class="button" @click="checkStatus">支付失败</div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败
    </this-dialog>
  </div>
</template>

<script>
import thisDialog from './base/dialog.vue'
export default {
  data() {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId:{
      type:[String,Number]
    }
  },
  components: {
    thisDialog
  },
  methods: {
    checkStatus () {
      this.$emit('on-close-check-dialog');
      this.isShowSuccessDialog = true;
    },
    hideSuccessDialog () {
      this.isShowSuccessDialog = false;
    },
    toOrderList () {
      this.$router.push({path:'/orderlist'});
    }
  }
}
</script>

<style>

</style>
