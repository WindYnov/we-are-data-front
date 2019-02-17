<template>
  <div class="stats">
    <h4>Statistiques</h4>
    <div>Quantité de produits vendues : {{qteProdVendue}} €</div>
    <div>Chiffre d'affaires : {{chiffreAffaires}} €</div>
    <div id="container" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>  
// Import modules
import { mapState, mapActions } from 'vuex';
// Import components
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'stats',
  components: {
    CustomButton
  },

  computed: {
    ...mapState(['sales', 'darkTheme']),
    defaultFontColor() {
      return this.darkTheme ? 'white' : 'black';
    },

    qteProdVendue() {
      return this.sales.reduce((acc, sale) => acc += sale.qteVendue, 0);
    },

    chiffreAffaires() {
      return this.sales.reduce((acc, sale) => acc += sale.totalHT - ((sale.totalHT * sale.tauxTVA) / 100), 0);
    }
  },

  data() {
    return {
      data: [
        {x: "Jan", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "Feb", value:12000, label:{enabled:true, fontColor: this.defaultFontColor, fontWeight:900, format:"{%value} €"}},
        {x: "March", value:13000, label:{enabled:true, fontColor:"red", fontWeight:900, format:"{%value} €"}},
        {x: "Apr", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "May", value:9000, label:{enabled:true, format:"{%value} €"}},
        {x: "Jun", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "Jul", value:12000, label:{enabled:true, fontColor: this.defaultFontColor, fontWeight:900, format:"{%value} €"}},
        {x: "Aug", value:13000, label:{enabled:true, fontColor:"red", fontWeight:900, format:"{%value} €"}},
        {x: "Oct", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "Nov", value:9000, label:{enabled:true, format:"{%value} €"}},
        {x: "Dec", value:9000, label:{enabled:true, format:"{%value} €"}}
      ]
    };
  },

  methods: {
    ...mapActions(['uploadAvatarImage'])
  },

  mounted() {
    // create the first series (area)
    var chart = anychart.area(this.data);
    chart.background().fill("transparent");
    chart.labels(true);
    chart.labels().fontColor(this.defaultFontColor);
    chart.labels().fontWeight(900);
    chart.labels().format("${%value}");

    // configure tooltips on the chart
    chart.tooltip().title("Information");
    chart.tooltip().format("Mois: {%categoryName} \nVentes: {%value} €");

    // set the container element 
    chart.container("container");
    // initiate chart display
    chart.draw();
  }
};
</script>

<style>
</style>