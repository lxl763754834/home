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
          <div class="startTime" @click="choose(1)">{{startTime==null ? '00:00'  : startTime}}</div>
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
          <div class="startTime" @click="choose(2)">{{endTime==null ? '12:00' : endTime}}</div>
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
      <mt-datetime-picker class="picker" v-show="showTime" @confirm="handleConfirm"
        ref="picker"
        type="time"
        v-model="pickerValue">
      </mt-datetime-picker>
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
        "weekListTime": [{
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
        "active": false,
        "addTime": [{
        "startTime": "",
        "start": "05:00",
        "end": "24:00",
        "endTime": "",
        "firstSelect": true,
        "or": 1,
        "startId": 1,
        "endId": 1
      }],
        "planAll": [{
        "Room": "卧室",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "房间",
          "id": "1",
          "active": false
        }, {
          "value": "窗帘整理",
          "id": "2",
          "active": false
        }, {
          "value": "床铺整理",
          "id": "3",
          "active": false
        }, {
          "value": "家具表面清洁整理",
          "id": "4",
          "active": false
        }, {
          "value": "地板清洁",
          "id": "5",
          "active": false
        }]
      }, {
        "Room": "卫生间",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "淋浴房清洁",
          "id": "1",
          "active": false
        }, {
          "value": "花洒、水龙头抛光",
          "id": "2",
          "active": false
        }, {
          "value": "浴缸清洁消毒",
          "id": "3",
          "active": false
        }, {
          "value": "移门滑轨清洁",
          "id": "4",
          "active": false
        }, {
          "value": "洗漱台清洁整理",
          "id": "5",
          "active": false
        }, {
          "value": "马桶清洁消毒",
          "id": "6",
          "active": false
        }, {
          "value": "洗衣",
          "id": "7",
          "active": false
        }, {
          "value": "地板清洁",
          "id": "8",
          "active": false
        }]
      }, {
        "Room": "厨房",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "橱柜表面清洁",
          "id": "1",
          "active": false
        }, {
          "value": "煤气灶表面清洁",
          "id": "2",
          "active": false
        }, {
          "value": "脱排油烟机表面清洁",
          "id": "3",
          "active": false
        }, {
          "value": "料理台表面清洁",
          "id": "4",
          "active": false
        }, {
          "value": "水槽清洁消毒",
          "id": "5",
          "active": false
        }, {
          "value": "家电表面清洁消毒",
          "id": "6",
          "active": false
        }, {
          "value": "地板清洁",
          "id": "7",
          "active": false
        }]
      }, {
        "Room": "客厅",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "沙发表面清洁整理",
          "id": "1",
          "active": false
        }, {
          "value": "装饰柜表面清洁",
          "id": "2",
          "active": false
        }, {
          "value": "茶几表面清洁整理",
          "id": "3",
          "active": false
        }, {
          "value": "拖鞋鞋底清洁",
          "id": "4",
          "active": false
        }, {
          "value": "绿植",
          "id": "5",
          "active": false
        }, {
          "value": "地板清洁(包括阳台)",
          "id": "6",
          "active": false
        }]
      }],
        "planClean": [{
        "Room": "第一周计划表",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "冰箱整理清洁",
          "id": "1",
          "active": false
        }]
      }, {
        "Room": "第二周计划表",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "床品清洁",
          "id": "1",
          "active": false
        }]
      }, {
        "Room": "第三周计划表",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "落地移门+滑轨",
          "id": "1",
          "active": false
        }, {
          "value": "洗衣机清洗(不拆装)",
          "id": "2",
          "active": false
        }, {
          "value": "阳台玻璃窗内部",
          "id": "3",
          "active": false
        }]
      }, {
        "Room": "第四周计划表",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "装饰柜清洁",
          "id": "1",
          "active": false
        }]
      }, {
        "Room": "第五周计划表",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "消毒柜清洁",
          "id": "1",
          "active": false
        }, {
          "value": "鞋柜清洁",
          "id": "2",
          "active": false
        }]
      }, {
        "Room": "第六周计划表",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": [{
          "value": "橱柜整理",
          "id": "1",
          "active": false
        }]
      }],
        "otherServer": [{
        "Room": "宠物",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": []
      }, {
        "Room": "熨烫",
        "RoomTime": 0,
        "num": 1,
        "serviceMinute": 0,
        "MinuteTime": [{
          "value": 0,
          "label": "0分钟"
        }, {
          "value": 15,
          "label": "15分钟"
        }, {
          "value": 30,
          "label": "30分钟"
        }, {
          "value": 45,
          "label": "45分钟"
        }, {
          "value": 60,
          "label": "60分钟"
        }],
        "weekListTime": []
      }],
        "serviceMinuteDefault": 0,
        "numDefault": 1,
        "planTimeAll": 0,
        "OtherTime": 0,
        "planTimeClean": 0
        },
//        timeWeeks:weeksObj,
        pickerValue:null,
        startTime:'00:00',
        endTime:"12:00",
        showTime:false,
        tim:null,
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
      },
      openPicker(){
        this.$refs.picker.open();
      },
      closePicker(){
        this.$refs.picker.close();
      },
      handleConfirm(){
        //开始时间
        if(this.tim ==1){
          if(this.pickerValue>=this.endTime){
            alert('开始时间无法大于结束时间');
          }else{
            this.startTime=this.pickerValue;
          }
        }
        //结束时间
        if(this.tim ==2){
          if(this.pickerValue<=this.startTime){
            alert('结束时间不能小于开始时间');
          }else{
            this.endTime=this.pickerValue;
          }

        }
        this.showTime = !this.showTime;

      },
      //选择开始时间还是结束时间
      choose(value){
        if(value==1){
          this.tim = 1;
        }
        if(value==2){
          this.tim = 2;
        }
        this.showTime = !this.showTime;
      }
    },
    created(){
      console.log(this.timeWeeks);
    },
    computed:{
    }
  }
</script>

<style  scoped lang="less" type="text/less">
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
  .picker{
    z-index: 99999 !important;
  }
}
</style>
