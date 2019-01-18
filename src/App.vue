<template>
  <div id="app">
    <Sidebar/>
    <div class="">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'home',
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
@import './css/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#app {
  overflow: hidden;
  position: relative;
  > .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 10%;
  }
  > div:last-child {
    position: fixed;
    left: 10%;
    width: 90%;
  }
}

</style>
