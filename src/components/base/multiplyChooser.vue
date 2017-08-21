<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
      v-for="(item,index) in multiply"
      :key="item.value"
      :class="{active:checkActive(index)}"
      @click="toggleSelection(index)"
      :title="item.label">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      nowIndexes: [0]
    }
  },
  methods: {
    toggleSelection(index) {
      if (this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index);
      } else {
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== index
        })
      }
      let nowObjectArray = _.map(this.nowIndexes, (idx) => {
        return this.multiply[idx]
      })
      this.$emit('on-change',nowObjectArray);
    },
    checkActive(index) {
      return this.nowIndexes.indexOf(index) !== -1
    }
  },
  props: {
    multiply: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}

.chooser-list li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}

.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
