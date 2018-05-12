<template>
  <div>
    <div class="wrap">
      <div class="header">
        <div class="headerTop"><span>需求信息</span></div>
        <div class="weeks">
        <ul>
          <li @click="select(item)" :class="{'class-a':item.checked}" v-for="(item,index) in timeWeeks.weekListTime" :key="index">
            {{  item.value }}
          </li>
        </ul>
      </div>
      <div class="times">
        <div>
          <span>开始时间</span>
          <div class="startTime">16:00</div>
        </div>
        <div class="clear">
          <div></div>
          <div></div>
          <div></div>
          <img src="../../src/common/img/2.png" alt="">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <span>结束时间</span>
          <div class="startTime">18:00</div>
        </div>
      </div>
      </div>
      <div class="tab">
        <router-link class="tab-item" to="/daily">日常清洁</router-link>
        <div></div>
        <router-link class="tab-item" to="/plans">计划清洁</router-link>
        <div></div>
        <router-link class="tab-item" to="/other">其他服务</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {formatDate} from '../../src/common/date';
  import {TimePicker} from 'mint-ui';
  import weeksObj from '../../src/common/data/index';
  export default {
    filters:{
      formatDate(time){
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
    name: "test",
    data() {
      return {
        timeWeeks: {
          "weekListTime": [
            {
              "value": "周一",
              "id": "1",
              "active": false
            }, {
              "value": "周二",
              "id": "2",
              "active": false
            }, {
              "value": "周三",
              "id": "3",
              "active": false
            }, {
              "value": "周四",
              "id": "4",
              "active": false
            }, {
              "value": "周五",
              "id": "5",
              "active": false
            }, {
              "value": "周六",
              "id": "6",
              "active": false
            }, {
              "value": "周天",
              "id": "7",
              "active": false
            }],

        },
      }
    },
    component:{

    },
    methods:{
      // 天数选择
      select(item){
        if(item.checked ==undefined){
          this.$set(item,'checked',true);
        }else{
          item.checked = !item.checked;
        }
      }
    },
    created(){
      console.log(weeksObj);
    }
  }
</script>

<style  scoped lang="less" type="text/less">
  /*@import "../../static/reset.css";*/
  @width:100%;
.wrap{
  width: @width;
  background-color: #25bc65;
  .header{
    width: @width;
    height: 183px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .headerTop{
      height: 25px;
      ont-family:PingFangSC-Semibold;
      font-size:18px;
      color:#ffffff;
      letter-spacing:-1.01px;
      text-align:left;
    }
    .weeks{
      width: @width;
      height: 42px;
      &>ul{
        width: @width;
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-left: 0;
        &>li{
          list-style: none;
          font-family:PingFangSC-Semibold;
          font-size:14px;
          color:#bafbd6;
        }
        .class-a{
          width: 41px;
          height: 41px;
          background-color: white;
          color:#2bc066;
          border-radius: 100%;
          text-align: center;
          line-height: 41px;
        }
        .class-b{
          width: 41px;
          height: 41px;
          background-color: #25bc65;
          color:#bafbd6;
        }
      }
    }
  .times{
     width: @width;
     display: flex;
     align-items: center;
     justify-content: space-around;
    &>div{
      &>span{
        font-family:PingFangSC-Regular;
        font-size:12px;
        color:#e2e2e2;
        letter-spacing:-0.75px;
        text-align:left;
      }
      .startTime{
        width: 57px;
        height: 33px;
        font-family:PingFangSC-Semibold;
        font-size:24px;
        color:#ffffff;
        letter-spacing:-2.7px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 2.7px;
      }
    }
    .clear{
      width: 124px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &>div{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: white;
      }
      &>img{
        width: 16px;
        height: 16px;
      }
    }
   }
  }
  .tab{
    width: @width;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    .tab-item{
      font-family:PingFangSC-Regular;
      font-size:16px;
      color:#b4b4b4;
      letter-spacing:-1.8px;
      text-align:left;
      text-decoration: none;
    }
    &>div{
      border:1px solid #979797;
      height:10px;
      background-color: #b5b5b5;
    }
  }
}
</style>
