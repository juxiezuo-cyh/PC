<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        <span class="demonstration">开始日期</span>
        <el-date-picker
          v-model="startDate"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="disabledStartDate"
          @change="onStartChange"
          >
        </el-date-picker>
      </div>
      <div class="order-list-option">
        <span class="demonstration">结束日期</span>
        <el-date-picker
          v-model="endDate"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="disabledEndDate"
          @change="onEndChange"
          >
        </el-date-picker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
      <div class="order-list-table">
        <table>
          <tr>
            <th
              v-for="(item,index) in tableHeads"
              @click="changeOrder(item)"
              :class="{active:item.active}">
              {{item.label}}
            </th>
          </tr>
          <tr v-for="item in tableData">
            <td v-for="(header,index) in tableHeads">{{item[header.key]}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VSelection from '../components/base/selection.vue'
import VDatePicker from 'vue-datepicker/vue-datepicker-es6.vue'
import _ from 'lodash'
export default {
  watch: {
    query() {
      this.gettableData();
    }
  },
  components: {
    VSelection,
    VDatePicker
  },
  data() {
    return {
      query: '',
      indexs:0,
      disabledStartDate : {
        disabledDate : (startDate) => {
          return startDate.getTime() <  Date.now() - 8.64e7;
        }
      },
      disabledEndDate : {
        disabledDate : (endtDate) => {
          let startTime = this.startDate;
          return endtDate.getTime() <=  startTime;
        }
      },
      productId: 0,
      startDate: '',
      endDate: '',
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
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      getOrderList: {
        list: [
          {
            orderId: "ddj123",
            product: "数据统计",
            version: "高级版",
            period: "1年",
            buyNum: 2,
            date: "2016-10-10",
            amount: "500元"
          },
          {
            orderId: "yuj583",
            product: "流量分析",
            version: "户外版",
            period: "3个月",
            buyNum: 1,
            date: "2016-5-2",
            amount: "2200元"
          },
          {
            orderId: "pmd201",
            product: "广告发布",
            version: "商铺版",
            period: "3年",
            buyNum: 12,
            date: "2016-8-3",
            amount: "7890元"
          }
        ]
      },
      tableData: [],
      currentOrder: 'asc',
      startTime: {
        time: ''
      },
      endTime: {
        time: ''
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
      ]
    }
  },
  methods: {
    changeOrder (headItem) {
      // this.indexs = headItem;
      // console.log(headItem)
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true;
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      }
      else if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      }
      this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    },
    onStartChange : (value) => {
      this.startDate =  value;
      console.log(this.startDate);
    },
    onEndChange : (value) => {
      this.endDate = value;
      console.log(this.endDate);
    },
    productChange(obj) {
      this.productId = obj.value;
      this.gettableData();
      console.log(this.startDate);
    },
    gettableData() {
      console.log('get')
      this.tableData = this.getOrderList.list;
    }
  },
  mounted() {
    this.gettableData();
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

