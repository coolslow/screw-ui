<template>
  <div class="components-list">
    <div class="header">
      <span class="title" @click="$router.push('/')">Components List</span>
    </div>
    <div class="container">
      <div class="side-bar">
        <router-link
          v-for="route in componentRoutes"
          :key="route.path"
          :to="route.path"
        >{{route.name}}</router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { componentRoutes } from './router'

export default {
  name: 'Home',
  data: () => ({
    componentRoutes: componentRoutes
  })
}
</script>

<style lang="less" scoped>
.components-list {
  height: 100%;
  .header {
    padding: 40px 0;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #efeff4;
    .title {
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: #38d39f;
      }
    }
  }
  .container {
    display: flex;
    .side-bar {
      width: 200px;
      min-height: 100vh;
      border-right: 1px solid #38d39f;
      display: flex;
      flex-direction: column;
      padding: 20px 0 0 60px;
      box-sizing: border-box;
      a {
        color: #a1a9b3;
        &:hover {
          color: #38d39f;
        }

        &.router-link-exact-active {
          color: #38d39f;
        }
      }
    }
    .content {
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
