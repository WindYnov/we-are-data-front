<template>
  <div class="clients">
    <div class=right>
       <CustomButton @click.native="saveSalesInfos(salesInfos)" classNames="btn--lg btn--green tu" text="Ajouter un client" />
    </div>
    <div >
      <div>
       <input placeholder="Nom" type="name" >
      </div>
      <div>
       <input placeholder="Prénom" type="name" >
      </div>
      <div>
         <input placeholder="Secteur" type="name" >
      </div>
      <div>
       <input placeholder="Adress" type="adress" >
      </div>
      <div>
       <input placeholder="Siret" type="name" >
      </div>
      <div>
       <input placeholder="Mail" type="mail" >
      </div>
      <div>
       <input placeholder="Numéro" type="number" >
      </div>
    </div>
    <p class= left>Liste des clients</p>
    <input v-model="search" placeholder='search' type="search">
    <Table
      :data="gridData"
      :columns="gridColumns"
      :filter-key="search"/>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'clients',
  components: {
    Table,
    CustomButton
  },
  data: () => {
  return {
    search: '',
    gridColumns: ['nom', 'prenom', 'secteur', 'siret', 'mail','numero'],
    gridData: [
      { nom: 'SAKHIRI ', prenom: 'Mostafa',secteur:'Informatique',siret:'11566',mail:'mostafa@gmail.com',numero: '065889515'  },
      {  nom: 'OTMANI ',prenom: 'Dina',secteur:'Informatique',siret:'11566',mail:'mostafa@gmail.com', numero: '065898985'   },
      {  nom: 'PACKO ',prenom: 'Jeremy',secteur:'Informatique',siret:'11566',mail:'mostafa@gmail.com', numero: '0603880515'   },
      {  nom: 'PRINCE',prenom: 'Luffy',secteur:'Informatique',siret:'11566',mail:'mostafa@gmail.com', numero: '0786565515'   }
    ]
  };
  }, methods: {
  }
};
</script>

<style>
.left{
  text-align: left;
}
</style>