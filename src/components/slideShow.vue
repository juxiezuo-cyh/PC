<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <!-- <li @click="left">&lt;</li> -->
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides" :key="index" @click="goto(index)">
        <a :class="{on:index == nowIndex}">{{index+1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
      <!-- <li @click="right">&gt;</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowIndex: 0,
      isShow:true
    }
  },
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1
    }
  },
  computed: {//和methods的区别是，计算属性有缓存，方法没有缓存
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  mounted() {
    this.runInv()
  },
  methods: {
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
        // this.right()
      }, this.inv)
    },
    clearInv() {
      // 鼠标移入的时候，清楚计时器。移开的时候，执行计时器
      clearInterval(this.invId);
    },
    goto(index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    left() {
      this.nowIndex -= 1;
      if (this.nowIndex < 0 || this.nowIndex == 0) {
        this.nowIndex = this.slides.length - 1;
      };
      return this.nowIndex;
    },
    right() {
      this.nowIndex += 1;
      if (this.nowIndex > (this.slides.length - 1)) {
        this.nowIndex = 0;
      };
      return this.nowIndex;
    }
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}

.slide-trans-enter {
  transform: translateX(900px);
}

.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}

.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}

.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}

.slide-img {
  width: 100%;
}

.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}

.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}

.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}

.slide-pages li .on {
  text-decoration: underline;
}
</style>
