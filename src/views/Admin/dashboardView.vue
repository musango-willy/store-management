<template>
    <div class="dashboard">
        <div class="chart-section">
            <v-chart class="chart" :option="option" />
        </div>
    </div>
</template>

<script>
import { use } from "echarts/core";
import {
    ToolboxComponent,
    GridComponent,
    LegendComponent,
    TooltipComponent,
    TitleComponent,
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

use([
    TitleComponent,
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
                title: {
                    show: true,
                    text: 'Sales of the day',
                    textStyle: {
                        fontWeight: 'bold',
                        fontSize: 24,
                        height: 80,
                    },
                    padding: 10,
                    top: 0,
                },
                legend: {
                    show: true,
                    padding: [
                        15,  // up
                        10, // right
                        15,  // down
                        15, // left
                    ],
                    itemWidth: 30,
                    itemHeight: 30,
                    textStyle: {
                        fontSize: 20
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Amount',
                        axisLabel: {
                            formatter: 'Ksh.{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Quantity',
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
                        data: [],
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
                        data: [],
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

<style lang="scss" scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: auto;
}
.chart-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 82%;
    border-radius: 1rem;
    background: #0c1130;

    .chart {
        height: 98%;
        width: 98%;
    }
}
</style>