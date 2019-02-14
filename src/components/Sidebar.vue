<template>
  <div class="sidebar">
    <div class="logo">
      <img width="100px" height="100px" src="./../assets/img/icon1.svg" />
    </div>
    <div v-for="setting in companySettings"
         :class="'setting '.concat(setting.active ? 'active' : '')"
         @click="refreshSettings(companySettings, setting)"
    >
      <a>{{setting.title}}</a>
    </div>
  </div>
</template>

<script>
// Import components
export default {
  name: 'sidebar',
  data: () => {
  return {
    companySettings: [
      { title: 'Personal settings', route: '/dashboard/personalsettings', active: false },
      { title: 'Sales', route: '/dashboard/sales', active: false },
      { title: 'Clients', route: '/dashboard/clients', active: false }
    ]
  };
  }, methods: {
    refreshSettings(companySettings, setting) {
      companySettings.map((setting) => setting.active = false);
      setting.active = true;
      this.$router.replace(setting.route);
      debugger;
    }
  }
}
</script>