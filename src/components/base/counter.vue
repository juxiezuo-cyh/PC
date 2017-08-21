<template>
  <div class="counter-component">
    <div class="counter-btn" @click="jian">-</div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="ipt">
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: this.numberData.min
    }
  },
  watch: {
    // 监听bumber的变化，然后将number传递给父组件
    number() {
      this.$emit('on-change', this.number);
    }
  },
  props: {
    numberData: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      }
    }
  },
  methods: {
    jian() {
      if (this.number <= this.numberData.min) {
        return;
      }
      this.number--;
    },
    add() {
      if (this.number >= this.numberData.max) {
        return;
      }
      this.number++;
    },
    ipt() {
      if (typeof this.number === 'String') {
        this.number = Number(this.number.replace(/\D/g, ''));
      };
      if (this.number < this.numberData.min || this.number > this.numberData.max) {
        this.number = this.numberData.min;
      };
    }
  }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}

.counter-show {
  float: left;
}

.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 11px;
}

.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}

.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
