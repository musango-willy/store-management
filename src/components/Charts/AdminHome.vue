<template>
    <div class="component-page">
        <apexchart width="1000" height="600" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    name: "AdminHome",
    components: {
        "apexchart": VueApexCharts,
    },
    data() {
        return {
            series: [
    
                {
                    name: 'Column A',
                    type: 'column',
                    data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
                },
                {
                    name: "Column B",
                    type: 'column',
                    data: [10, 19, 27, 26, 34, 35, 40, 38]
                },
                {
                    name: "Line C",
                    type: 'line',
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
                },
            ],
            options: {
                dataLabels: {
                    enabled: false
                },
                colors: ['#086b4a', '#116af0', '#d43810'],
                grid: {
                    // position: 'middle',
                    strokeDashArray: 1,
                    row: {
                        colors: ['#031e38'],
                        opacity: 0.8
                    },
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                stroke: {
                    width: [4,4,4],
                    curve: 'smooth'
                },
                zoom: {
                    enabled: false
                },
                markers: {
                    size: 4,
                },
                
                plotOptions: {
                    bar: {
                        columnWidth: "65%"
                    },
                    
                },
                fill: {
                    type: 'gradient' // 'pattern' / 'image'
                },
                xaxis: {
                    categories: [
                        2009, 2010, 2011, 2012, 2013, 2014, 2015,2016
                    ]
                },
                yaxis: [
                    {
                        seriesName: "Column A",
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true
                        },
                        title: {
                            text: "Columns"
                        },
                    },
                    {
                        seriesName: "Column A",
                        show: false
                    },
                    {
                        opposite: true,
                        seriesName: "Line C",
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true
                        },
                        title: {
                            text: "Line"
                        }
                    }
                ],
                tooltip: {
                    shared: false,
                    intersect: true,
                    x: {
                        show: false
                    }
                },
                legend: {
                    horizontalAlign: "left",
                    offsetX: 100
                }
            }
        }
    }

}
</script>

<style lang="scss" scoped>
* {
    color: #031e38;
}

</style>