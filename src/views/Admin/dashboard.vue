<template>
    <div class="component-page">
        <div class="description">
            {{time_made}}
            <Description />
        </div>
        <div class="chart-section">
            <apexchart width="1150" height="610" type="line" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios';
import Description from "@/components/Description/adminViewAbout.vue"
export default {
    name: "AdminHome",
    components: {
        "apexchart": VueApexCharts,
        Description,
    },
    mounted() {
        this.getItems();
    },
    data() {
        return {
            quantity_sold: [],
            amount_made: [],
            time_made: [],
            series: [
    
                {
                    name: 'Column A',
                    type: 'column',
                    data: [],//[50,30,10,80,100],
                    color: '#086b4a'
                },
                // {
                //     name: "Column B",
                //     type: 'column',
                //     data: [10, 19, 27, 26, 34, 35, 40, 38],
                //     color: '#116af0',
                //     opacity: 0.9
                // },
                {
                    name: "Line C",
                    type: 'line',
                    data: [],//[10,4,6,20,40],
                    color: '#d43810',
                },
            ],
            options: {
                // chart: {
                //     height: '10'
                // },
                dataLabels: {
                    enabled: false
                },
                stacked: false,
                theme: {
                    mode: 'dark'
                },
                grid: {
                    strokeDashArray: 1,
                    row: {
                        colors: ['#0000000'],
                        opacity: 0.25
                    },
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                stroke: {
                    width: [1,2.5],
                    curve: 'smooth'
                },
                zoom: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                fill: {
                    opacity: 1,
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%",
                        borderRadius: 4,
                    },
                    
                },
                xaxis: {
                    categories: null,//['8:30','9:00','9:30','10:00','10:30',],
                    // tickAmount: 15,
                    convertedCatToNumeric: false,
                    axisBorder: {
                        show: false,
                    },
                },
                yaxis: [
                    {
                        seriesName: "Column A",
                        axisTicks: {
                            show: true,
                            color: '#fff',
                        },
                        axisBorder: {
                            show: true,
                            color: '#fff',
                            width: 0.3,
                        },
                        title: {
                            text: "Columns"
                        },
                    },
                    {
                        opposite: true,
                        seriesName: "Line C",
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#e98706',
                            width: 0.5,
                        },
                        title: {
                            text: "Line"
                        }
                    }
                ],
                tooltip: {
                    shared: true,
                    intersect: false,
                    x: {
                        show: true,
                    },
                    offsetX: 30
                },
                legend: {
                    horizontalAlign: "left",
                    position: 'bottom',
                    offsetX: 50,
                    // offsetY: 5,
                    fontSize: '16px',
                    // width: 500,
                    // height: 35,
                    markers: {
                        width: 28,
                        height: 24,
                        strokeWidth: '2px',
                        strokeColor: '#000',
                        radius: '4px',
                        offsetY: 5
                    },
                }
            }
        }
    },
    methods: {
        updateChart() {
            this.series[0].data = this.amount_made;
            this.series[1].data = this.quantity_sold;
            this.options.xaxis.categories = this.time_made;
        },
        async getItems() {
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
                this.updateChart();
                // console.log(this.time_made);
            } catch(e) {
                console.error(e);
            }
        },
    }

}
</script>

<style lang="scss" scoped>
.component-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.description {
    display: flex;
    justify-content: center;
    align-items: center;

}
.chart-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
}

</style>