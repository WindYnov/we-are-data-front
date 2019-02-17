<template>
  <div class="sidebar">
    <div class="logo">
      <img width="100px" height="100px" src="./../assets/img/icon1.svg" />
    </div>

    <div v-for="setting in settings"
         :class="'setting '.concat(setting.active ? 'active' : '')"
         @click="refreshSettings(settings, setting)"
    >
      <a>{{setting.title}}</a>
    </div>

    <div @click="logout() && $router.replace('/')" class="setting">
      <a>Déconnexion</a>
    </div>
  </div>
</template>

<script>
// Import modules
import { mapState, mapActions } from 'vuex';
// Import components
export default {
  name: 'sidebar',
  computed: {
    ...mapState(['settings'])
  },

  methods: {
    ...mapActions(['logout']),
    refreshSettings(settings, setting) {
      settings.map((setting) => setting.active = false);
      setting.active = true;
      this.$router.replace(setting.route);
    }
  }
}
</script>