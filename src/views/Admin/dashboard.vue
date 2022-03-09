<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import {
    ToolboxComponent,
    GridComponent,
    LegendComponent,
    TooltipComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

use([
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    LineChart,
    CanvasRenderer,
    UniversalTransition
]);
import VChart, { THEME_KEY } from "vue-echarts";
import axios from 'axios';

export default {
    name: "HelloWorld",
    components: {
        VChart
    },
    provide: {
        [THEME_KEY]: "dark"
    },
    created() {
        this.getData();
    },
    data() {
        return {
            quantity_sold:[],
            amount_made:[],
            time_made:[],
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross',
                    crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    show: true,
                    padding: [
                        15,  // up
                        10, // right
                        15,  // down
                        15, // left
                    ]
                    // data: ['Evaporation', 'Precipitation', 'Temperature']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [],//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Amount',
                        // min: 0,
                        // max: 250,
                        // interval: 50,
                        axisLabel: {
                            formatter: 'Ksh.{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Quantity',
                        // min: 0,
                        // max: 25,
                        // interval: 5,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name: 'Amount',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                            return 'Ksh.'+value;
                        }
                        },
                        data: [],//[
                            //2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                        //]
                    },
                    {
                        name: 'Quantity',
                        type: 'line',
                        yAxisIndex: 1,
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' items';
                            }
                        },
                        data: [],//[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                        smooth: true
                    }
                ]
            },
            // ------------------
        }
    },
    methods: {
        async getData() {
            try {
                const res = await axios.get('invent')
                const data = res.data;
                for (let index = 0; index < data.length; index++) {
                    const price = data[index].price;
                    const quantity = data[index].quantity;
                    const time_data = data[index].time_data;
                    this.quantity_sold.push(quantity);
                    this.amount_made.push(price);
                    this.time_made.push(time_data);
                    
                }
                // console.log(this.time_made);
                this.option.xAxis[0].data = this.time_made;
                this.option.series[0].data = this.amount_made;
                this.option.series[1].data = this.quantity_sold;
            } catch(e) {
                console.error(e);
            }
        }
    }

}
</script>

<style scoped>
.chart {
  height: 600px;
  width: 100%;
}
</style>