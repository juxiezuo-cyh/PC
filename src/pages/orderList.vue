<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        开始日期
        <v-date-picker :date="startTime" :option="option" :limit="limit"></v-date-picker>
      </div>
      <div class="order-list-option">
        结束日期
        <v-date-picker :date="endtime" :option="option" :limit="limit"></v-date-picker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model="query">
      </div>
      <div class="order-list-table">
        <table>
          <tr>
            <th></th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import VSelection from '../components/base/selection.vue'
import VDatePicker from 'vue-datepicker/vue-datepicker-es6.vue'

export default {
  components: {
    VSelection,
    VDatePicker
  },
  data () {
    return {
      query:'',
      productId:0,
      startTime: {
        time: '2017-08-22'
      },
      endtime: {
        time: '2017-09-22'
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: 'when?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [
        {
          type: 'weekday',
          available: [1, 2, 3, 4, 5]
        },
        {
          type: 'fromto',
          from: '2016-02-01',
          to: '2016-02-20'
        }
      ],
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ]
    }
  },
  methods: {
    productChange (obj) {
      this.productId = obj.value;
    }
  }
}
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>

