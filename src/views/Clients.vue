<template>
  <div class="clients">
    <AddClientsForm v-if="showAddClientForm" v-on:closeForm="showAddClientForm = false;" />
    <CustomButton id="add-client-btn" @click.native="showAddClientForm = true;" classNames="btn--lg btn--green tu" text="Ajouter des clients" />

    <div class="clients-infos">
      <input v-model="search" placeholder='Search for a client' type="search">
      <Table
        :data="clients"
        :columns="gridColumns"
        :filter-key="search"/>
    </div>
  </div>
</template>

<script>
// Import modules
import { mapState } from 'vuex';
// Import components
import Table from '@/components/Table.vue';
import CustomButton from '@/components/CustomButton.vue';
import AddClientsForm from '@/components/AddClientsForm.vue';

export default {
  name: 'clients',
  components: {
    Table,
    CustomButton,
    AddClientsForm
  },
  computed: {
    ...mapState(['clients'])
  },
  data: () => {
  return {
    search: '',
    gridColumns: ['nom', 'secteur', 'siret', 'mail','telephone'],
    showAddClientForm: false,
    client: {}
  };
  }
};
</script>

<style>
</style>