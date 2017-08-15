<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input">
          <input type="text" placeholder="请输入用户名" v-model="regModel">
        </div>
        <span class="g-form-error">{{regErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onReg">登录</a>
        </div>
        <p>{{errorText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      regModel: '',
      errorText:''
    }
  },
  methods: {
    onReg () {
      if (!this.regErrors.status){
        this.errorText = '用户名不正确';
      }else{
        let data = {
          username : this.regModel
        }
        this.$emit('reg-success',data);
      }
    }
  },
  computed: {
    regErrors () {
      let errorText,status;
      if(!/@/g.test(this.regModel)){
        errorText = '用户名缺少@';
        status = false;
      }else{
        errorText = '';
        status = true;
      }
      if(!this.regFlag){
        errorText = '';
        this.regFlag = true;
      }
      return {
        errorText,
        status
      }
    }
  }
}
</script>

<style scoped>
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}

.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}

.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}

.dialog-close:hover {
  color: #4fc08d;
}
</style>
