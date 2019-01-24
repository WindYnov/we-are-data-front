<template>
  <div class="sales">
    <div id="import-sales-file">
      <input type="file" name="file" @change="processFile($event)">
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
        <SelectBox :options="clientOptions" placeholder="client" />
        <input v-model="salesInfos.productsType" placeholder="catégorie de produits vendus" type="name"/>
        <input v-model="salesInfos.activityArea" placeholder="secteur d’activité" type="name"/>
        <CustomButton @click.native="saveSalesInfos(salesInfos)" classNames="btn--lg btn--green tu" text="Sauvegarder" />
      </div>
      <div class="sales-infos">
        <Table
          :data="sales"
          :columns="gridColumns"
          :filter-key="search"/>
      </div>
    </div>
  </div>
</template>

<script>
// Import modules
import { mapState, mapActions } from 'vuex';
// Import components
import CustomButton from '@/components/CustomButton.vue';
import Sidebar from '@/components/Sidebar.vue';
import SelectBox from '@/components/SelectBox.vue';
import Table from '@/components/Table.vue';
export default {
  name: 'sales',
  components: {
    CustomButton,
    Sidebar,
    SelectBox,
    Table
  },
  data: () => {
  return {
    file: null,
    clientOptions: [],
    search: '',
    gridColumns: [ 'dateFacture', 'productName', 'totalHT', 'tauxTVA', 'qteVendue', 'client', 'productsType', 'activityArea' ],
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
  },
  computed: {
    ...mapState(['clients', 'sales'])
  },
  methods: {
    ...mapActions(['saveSalesInfos', 'processFile'])
  },
  mounted() {
    this.clients.forEach((client) => this.clientOptions.push({ label: client.nom, key: client._id}));
  }
};
</script>
