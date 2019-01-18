<template>
  <div class="sales">
    <div id="import-sales-file">
      <input type="file" name="file">
    </div>
    <div class="add-sales-infos">
      <h3>Infos de ventes</h3>
      <div class="">
        <input v-model="salesInfos.numFacture" placeholder="numéro de facture" type="number"/>
        <input v-model="salesInfos.dateFacture" placeholder="date de la facture" type="date"/>
        <input v-model="salesInfos.productName" placeholder="nom du produit vendu" type="name"/>
        <input v-model="salesInfos.totalHT" placeholder="total ht" type="number"/>
        <input v-model="salesInfos.tauxTVA" placeholder="taux de TVA" type="number"/>
        <input v-model="salesInfos.qteVendue" placeholder="quantités vendues" type="number"/>
        <input v-model="salesInfos.client" placeholder="client" type="name"/>
        <input v-model="salesInfos.productsType" placeholder="catégorie de produits vendus" type="name"/>
        <input v-model="salesInfos.activityArea" placeholder="secteur d’activité" type="name"/>
        <CustomButton @click.native="saveSalesInfos(salesInfos)" classNames="btn--lg btn--green tu" text="Sauvegarder" />
      </div>
    </div>
  </div>
</template>

<script>
// Import modules
import axios from 'axios';
// Import components
import CustomButton from '@/components/CustomButton.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'sales',
  components: {
    CustomButton,
    Sidebar
  },
  data: () => {
  return {
    salesInfos: {
      numFacture: null,
      dateFacture: null,
      productName: null,
      totalHT: null,
      tauxTVA: null,
      qteVendue: null,
      client: null,
      productsType: null,
      activityArea: null
    }
  };
  }, methods: {
    saveSalesInfos(salesInfos) {
      debugger;
      // axios.post('http://localhost:3000/company/salesinfos', salesInfos);
    }
  }
}
</script>