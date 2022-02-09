<template>
  <div class="chart">
      <apexchart width="400" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    components: {
        "apexchart": VueApexCharts,
    },
    data: function() {
        return {
        options: {
            chart: {
            id: 'vuechart-example'
            },
            xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
        }
    },

}
</script>

<style lang="scss" scoped>
.chart {
    float: left;
    padding: 10px;
    max-width: 400px;
}
</style>