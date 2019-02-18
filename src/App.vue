<template>
  <div id="app" :class="`${darkTheme && this.$router.history.current.path !== '/' ? 'dark-theme' : ''}`">
    <Sidebar v-if="this.$router.history.current.path !== '/' && isConnected" />
    <div :style="`${this.$router.history.current.path === '/' || !isConnected ? 'width: 100%;' : 'left: 10%; width: 90%;'}
      ${this.darkTheme && this.$router.history.current.path !== '/' ? 'background-color: #2c3e52;' : ''}`">
      <router-view/>
    </div>
  </div>
</template>

<script>
// Import modules
import { mapState } from 'vuex';

// Import components
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'home',
  components: {
    Sidebar
  },
  computed: {
    ...mapState(['isConnected', 'darkTheme'])
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
    height: 100%;
    overflow: auto;
  }
}

</style>
