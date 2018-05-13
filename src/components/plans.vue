<template>
  <div class="content">
    <div class="wrap">
      <div class="contentLeft" v-if="index==0" v-for="(item,index) in plans.planClean">
        <div>
          <span>{{item.Room}}</span>
          <span>合计{{count}}分钟</span>
        </div>
      </div>
      <div class="contentRight">
        <div class="rtop">
          <select @change="getTime" v-model="select" name="selected">
            <option value="0">0分钟</option>
            <option value="30">30分钟</option>
            <option value="60">60分</option>
          </select>
          <div class="count">
            <div @click="reduce">-</div>
            <span ref="degree">{{degree}}</span>
            <div @click="add">+</div>
          </div>
        </div>
        <ul class="choose">
          <li v-for="(item,index) in plans.planClean[0].weekListTime" :key="index">
            {{ item.value }}
          </li>
        </ul>
      </div>
    </div>
    <div class="btns">
      <button>客户确认</button>
      <button>保存</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "plans",
    data(){
      return {
        plans: {
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
        select:0,
        degree:2
        }

    },
    methods:{
      getTime(){

      },
      //次数减少
      reduce(){
        this.degree -= 1;
        if(this.degree<=0){
          this.degree = 0;
        }
      },
      //次数增加
      add(){
        this.degree +=1;
        if(this.degree>=9){
          this.degree = 9;
        }
      },
    },
    computed:{
      count(){
        let total = this.degree * this.select;
//        console.log(total);
        return total;
      }
    }
  }
</script>

<style lang="less" scoped>
  @width:100%;
  .content{
    width: @width;
    height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #d9e6e4;
    .wrap{
      width: @width;
      margin-top: 16px;
      display: flex;
      justify-content: center;
    }
  }
  .contentLeft{
    background:#bfbfbf;
    border-radius:6px;
    width:121px;
    height:79px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    &>div{
      width: 57px;
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &>span{
        width: 75px;
        height: 40px;
        font-family:PingFangSC-Semibold;
        font-size:14px;
        color:#ffffff;
        letter-spacing:-1.57px;
        text-align:center;
      }
    }
  }
  .contentRight{
    width: 233px;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    .rtop{
      width: @width;
      display: flex;
      align-items: center;
      &>select{
        background:#ffffff;
        border:1px solid #e2e2e2;
        border-radius:4px;
        width:98px;
        height:23px;
      }
      .count{
        margin-left: 10px;
        background:#ffffff;
        border:1px solid #e2e2e2;
        border-radius:4px;
        width:102px;
        height:23px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &>div{
          width: 25px;
          height: 25px;
          background-color: rgba(201,237,187,0.56);
          text-align: center;
          line-height: 25px;
        }
        &>span{
          text-align: center;
          width: 64px;
          background:#ffffff;
        }

      }
    }

  }
  .choose{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    &>li{
      font-family:PingFangSC-Regular;
      font-size:10px;
      padding: 0px 8px;
      margin-top: 5px;
      margin-right: 10px;
      border: 1px solid #e2e2e2;
      border-radius: 10%;
      color:#bababa;
      letter-spacing:-1.12px;
      text-align:center;
      font-size: 10px;
      list-style: none;
      background-color: #ffffff;
    }
  }
  .btns{
    width: @width;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    &>button{
      background:#25bc65;
      box-shadow:0 2px 4px 0 rgba(4,113,51,0.67);
      border-radius:4px;
      width:106px;
      height:39px;
      color: #ffffff;
      font-size: 14px;
      outline: none;
    }
    &>button:nth-child(1){
      margin-right: 30px;
    }
  }

</style>
