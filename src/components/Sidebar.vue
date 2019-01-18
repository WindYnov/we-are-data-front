<template>
  <div class="sidebar">
    <router-link v-for="setting in companySettings" class="setting" :to="setting.route">
      <a>{{setting.title}}</a>
    </router-link>
  </div>
</template>

<script>
// Import components
export default {
  name: 'sidebar',
  data: () => {
  return {
    companySettings: [
      { title: 'Personal settings', route: '/' },
      { title: 'Sales', route: '/dashboard/sales' },
      { title: 'Clients', route: '/dashboard/clients' }
    ]
  };
  }, methods: {
  }
}
</script>