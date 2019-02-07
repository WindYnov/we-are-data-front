<template>
  <div class="add-sales-form">
      <div class="close" @click="$emit('closeForm')">x</div>
      <h3>Infos de ventes</h3>
      <div class="">
        <input v-model="salesInfos.dateFacture" placeholder="date de la facture" type="date"/>
        <input v-model="salesInfos.productName" placeholder="nom du produit vendu" type="name"/>
        <input v-model="salesInfos.totalHT" placeholder="total ht" type="number"/>
        <input v-model="salesInfos.tauxTVA" placeholder="taux de TVA" type="number"/>
        <input v-model="salesInfos.qteVendue" placeholder="quantités vendues" type="number"/>
        <SelectBox :defaultOption="{ key: null, label: 'Select a client' }" v-on:onSelectOption="onSelectOption" :options="clientOptions" />
        <input v-model="salesInfos.productsType" placeholder="catégorie de produits vendus" type="name"/>
        <input v-model="salesInfos.activityArea" placeholder="secteur d’activité" type="name"/>
        <CustomButton @click.native="saveSalesInfos(salesInfos) && resetForm()" classNames="btn--lg btn--green tu" text="Sauvegarder" />
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
export default {
  name: 'sales',
  components: {
    CustomButton,
    Sidebar,
    SelectBox
  },
  data: () => {
  return {
    file: null,
    clientOptions: [],
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
    ...mapState(['clients'])
  },
  methods: {
    ...mapActions(['saveSalesInfos']),
    onSelectOption(option) {
      let client = this.clients.find((client) => client._id === option.key);
      if (client) {
        this.salesInfos.client = client.nom;
      }
    },
    resetForm() {
      this.salesInfos =  {
        numFacture: null,
        dateFacture: null,
        productName: null,
        totalHT: null,
        tauxTVA: null,
        qteVendue: null,
        client: null,
        productsType: null,
        activityArea: null
      };
    }
  },
  mounted() {
    this.clients.forEach((client) => this.clientOptions.push({ label: client.nom, key: client._id}));
  }
};
</script>
