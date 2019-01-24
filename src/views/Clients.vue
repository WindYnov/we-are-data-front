<template>
  <div class="clients">
    <h3>Ajouter un client</h3>
    <div class="add-client-form">
       <input v-model="client.nom" placeholder="Nom" type="text" >
       <input v-model="client.secteur" placeholder="Secteur" type="text" >
       <input v-model="client.adress" placeholder="Adress" type="text" >
       <input v-model="client.siret" placeholder="Siret" type="text" >
       <input v-model="client.mail" placeholder="Mail" type="mail" >
       <input v-model="client.numero" placeholder="Numéro" type="number" >
       <div>
          <CustomButton @click.native="saveClient(client)" classNames="btn--lg btn--green tu" text="Ajouter le client" />
       </div>
    </div>
    <h3>Liste des clients</h3>
    <input v-model="search" placeholder='search' type="search">
    <Table
      :data="clients"
      :columns="gridColumns"
      :filter-key="search"/>
  </div>
</template>

<script>
// Import modules
import { mapState, mapActions } from 'vuex';
// Import components
import Table from '@/components/Table.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'clients',
  components: {
    Table,
    CustomButton
  },
  computed: {
    ...mapState(['clients'])
  },
  data: () => {
  return {
    search: '',
    gridColumns: ['nom', 'secteur', 'siret', 'mail','numero'],
    client: {}
  };
  }, methods: {
    ...mapActions(['saveClient'])
  }
};
</script>

<style>
</style>