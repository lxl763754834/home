<template>
    <div class="clears">
      <div>
        <router-link to="/daily">
          <div>日常清洁</div>
        </router-link>
        <router-link to="/plans">
          <div>计划清洁</div>
        </router-link>
        <router-link to="/other">
          <div>其他服务</div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "clear"
    }
</script>

<style scoped>
.clears{
  width: 100%;
  height: 40px;
}
  .clears div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    color: #b5b5b5;

  }
</style>
