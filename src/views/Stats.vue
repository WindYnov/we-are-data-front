<template>
  <div class="stats">
    <h4>Statistiques</h4>
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

  data: () => {
    return {
      data: [
        {x: "Jan", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "Feb", value:12000, label:{enabled:true, fontColor:"green", fontWeight:900, format:"{%value} €"}},
        {x: "March", value:13000, label:{enabled:true, fontColor:"red", fontWeight:900, format:"{%value} €"}},
        {x: "Apr", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "May", value:9000, label:{enabled:true, format:"{%value} €"}},
        {x: "Jun", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "Jul", value:12000, label:{enabled:true, fontColor:"green", fontWeight:900, format:"{%value} €"}},
        {x: "Aug", value:13000, label:{enabled:true, fontColor:"red", fontWeight:900, format:"{%value} €"}},
        {x: "Oct", value:10000, label:{enabled:true, format:"{%value} €"}},
        {x: "Nov", value:9000, label:{enabled:true, format:"{%value} €"}},
        {x: "Dec", value:9000, label:{enabled:true, format:"{%value} €"}}
      ]
    };
  },

  computed: {
    ...mapState(['darkTheme'])
  },

  methods: {
    ...mapActions(['switchTheme', 'uploadAvatarImage'])
  },

  mounted() {
    // create the first series (area)
    var chart = anychart.area(this.data);
    chart.labels(true);
    chart.labels().fontColor("green");
    chart.labels().fontWeight(900);
    chart.labels().format("${%value}");

    // configure tooltips on the chart
    chart.tooltip().title("Information");
    chart.tooltip().format("Mois: {%categoryName} \nVentes: ${%value}");

    // set the container element 
    chart.container("container");
    // initiate chart display
    chart.draw();
  }
};
</script>

<style>
</style>