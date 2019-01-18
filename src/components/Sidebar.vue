<template>
  <div class="sidebar">
    <a  v-for="setting in companySettings" class="setting" :href="setting.link">{{setting.title}}</a>
  </div>
</template>

<script>
// Import components
export default {
  name: 'sidebar',
  data: () => {
  return {
    companySettings: [
      { title: 'Personal settings', link: '' },
      { title: 'Sales', link: '/sales' },
      { title: 'Clients', link: '/clients' }
    ]
  };
  }, methods: {
  }
}
</script>