<template>
  <div class="add-client-form">
      <div class="close" @click="$emit('closeForm')">x</div>
      <h3>Ajouter un client</h3>
      <div>
         <input v-model="client.nom" placeholder="Nom" type="text" >
         <input v-model="client.secteur" placeholder="Secteur" type="text" >
         <input v-model="client.siret" placeholder="Siret" type="text" >
         <input v-model="client.mail" placeholder="Mail" type="mail" >
         <input v-model="client.telephone" placeholder="Numéro" type="number" >
         <div>
            <CustomButton @click.native="saveClient(client) && resetForm()" classNames="btn--lg btn--green tu" text="Ajouter le client" />
         </div>
      </div>
  </div>
</template>


<script>  
// Import modules
import { mapActions } from 'vuex';
// Import components
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'add-client-form',
  components: {
    CustomButton
  },
  data: () => {
    return {
      client: {}
    };
  },
  methods: {
    ...mapActions(['saveClient']),
    resetForm() {
      this.client = {};
    }
  }
};
</script>

<style>
</style>