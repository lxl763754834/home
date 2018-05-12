<template>
  <div class="content">
      <div class="contentLeft" v-for="(item) in housework.planAll">
          <div>
            <span>{{item.Room}}</span>
            <span>{{count}}分钟</span>
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
          <div></div>
          <span ref="degree">2</span>
          <div></div>
        </div>
      </div>
      <ul class="choose">
        <li v-for="(item,index) in housework.planAll[0].weekListTime" :key="index">
          {{ item.value }}
        </li>
      </ul>
    </div>
    <div class="btns">
      <button @click="affirm">客户确认</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "daily",
      data(){
          return {
            housework: {
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
        affirm(){
          alert('确认成功');
        },
        save(){
          alert('保存成功');
        }
      },
      computed:{
        count(){
          let total = this.degree * this.select;
//          console.log(total);
          this.$store.commit('getDaily',total);
          return total;
        }
      },
      mounted(){
        console.log(this.$store.state.daily);
      }

    }
</script>

<style lang="less" scoped>
  @width:100%;
.content{
  width: @width;
  display: flex;
  align-items: center;
  justify-content: center;
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
    justify-content: space-around;
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
     }
  }
  .btns{
    width: @width;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5px;
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
