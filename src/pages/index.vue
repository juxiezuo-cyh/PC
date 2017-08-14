<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3 :key="product.title">{{product.title}}</h3>
          <ul :key="product.title">
            <li v-for="item in product.list" :key="item.name" :class="{'hot':item.hot}">
              <a :href="item.url" target="block">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">Hot</span>
            </li>
          </ul>
          <div v-if="!product.last" :key="product.title" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="news in newsList" :key="news.title">
            <a :href="news.url" target="block">{{news.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="inv" @onchange="doSomeThing"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" :class="[{'line-last':index % 2},'index-board-'+item.id]" v-for="(item,index) in boardList" :key="item.title">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <a href="" class="button">立刻购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from  '../components/slideShow.vue'
export default {
  components:{
    slideShow
  },
  created: function () {
    // this.$http.get('api/getNewList')
    // .then((res) => {
    //   this.newsList = res.data;
    // },(err) => {
    //   console.log(err);
    // });
  },
  name: 'IndexPage',
  data() {
    return {
      inv:2000,
      slides:[
        {
          src:require('../assets/slideShow/pic1.jpg'),
          title:'xx1',
          href:'http://www.baidu.com'
        },
        {
          src:require('../assets/slideShow/pic2.jpg'),
          title:'xx2',
          href:'http://www.baidu.com'
        },
        {
          src:require('../assets/slideShow/pic3.jpg'),
          title:'xx3',
          href:'http://www.baidu.com'
        },
        {
          src:require('../assets/slideShow/pic4.jpg'),
          title:'xx4',
          href:'http://www.baidu.com'
        }
      ],
      boardList: [
        {
          title: '开',
          description: '开放产品是一款开放产品',
          id: 'car',
          saleout: false
        },
        {
          title: '开发',
          description: '开放产品是一款开放产品',
          id: 'earth',
          saleout: false
        },
        {
          title: '开发产',
          id: 'loud',
          description: '开放产品是一款开放产品',
          saleout: false
        },
        {
          title: '开发产品',
          id: 'hill',
          description: '开放产品是一款开放产品',
          saleout: false
        }
      ],
      newsList: [
        {
          title: '数据统计',
          url: 'http://baidu.com'
        },
        {
          title: '数据预测',
          url: 'http://baidu.com'
        },
        {
          title: '数据分析',
          url: 'http://baidu.com',
          hot: true
        },
        {
          title: '广告发布',
          url: 'http://baidu.com'
        }
      ],
      productList: {
        PC: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://baidu.com'
            },
            {
              name: '数据预测',
              url: 'http://baidu.com'
            },
            {
              name: '数据分析',
              url: 'http://baidu.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://baidu.com'
            }
          ]
        },
        APP: {
          title: 'APP产品',
          last: true,
          list: [
            {
              name: '数据统计',
              url: 'http://baidu.com'
            },
            {
              name: '数据预测',
              url: 'http://baidu.com'
            },
            {
              name: '数据分析',
              url: 'http://baidu.com'
            },
            {
              name: '广告发布',
              url: 'http://baidu.com'
            }
          ]
        }
      }
    }
  },
  methods:{
    doSomeThing(index){
      // console.log(index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.index-left {
  float: left;
  width: 300px;
  text-align: left;
}

.index-right {
  float: left;
  width: 900px;
}

.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}

.index-left-block .hr {
  margin-bottom: 20px;
}

.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}

.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}

.index-left-block ul {
  padding: 10px 15px;
}

.index-left-block li {
  padding: 5px;
}

.index-board-list {
  overflow: hidden;
}

.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}

.index-board-car .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
}

.index-board-loud .index-board-item-inner {
  background: url(../assets/images/2.png) no-repeat;
}

.index-board-earth .index-board-item-inner {
  background: url(../assets/images/3.png) no-repeat;
}

.index-board-hill .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
}

.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}

.line-last {
  margin-right: 0;
}

.index-board-button {
  margin-top: 20px;
}

.lastest-news {
  min-height: 512px;
}

.hot-tag {
  background: red;
  color: #fff;
}

.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
