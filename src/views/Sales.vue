<template>
  <div class="sales">
    <AddSalesForm v-if="showSalesForm" v-on:closeForm="showSalesForm = false;" />
    <div id="import-add-sales-file">
      <InputFile text="Charger un fichier de ventes" v-on:uploadFile="processFile($event)" />
      <CustomButton @click.native="showSalesForm = true;" classNames="btn--lg btn--green tu" text="Ajouter des ventes" />
    </div>
    <div class="add-sales-infos">
      <div class="sales-infos">
        <input v-model="search" placeholder="Rechercher des ventes" />
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
import AddSalesForm from '@/components/AddSalesForm.vue';
import InputFile from '@/components/InputFile.vue';

export default {
  name: 'sales',
  components: {
    CustomButton,
    Sidebar,
    SelectBox,
    Table,
    AddSalesForm,
    InputFile
  },
  data: () => {
  return {
    file: null,
    clientOptions: [],
    search: '',
    gridColumns: [ 'dateFacture', 'productName', 'totalHT', 'tauxTVA', 'qteVendue', 'client', 'productsType', 'activityArea' ],
    showSalesForm: false  ,
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
    ...mapActions(['saveSalesInfos', 'processFile']),
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
