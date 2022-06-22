<template>
  <vue-highcharts
    type="chart"
    :options="chartOptions"
    :deep-copy-on-update="true"
    :redraw-on-update="true"
    :one-to-one-update="true"
    :animate-on-update="true"
    @rendered="onRender"
    @update="onUpdate"
    @destroy="onDestroy"
  />
</template>

<script>
  import VueHighcharts from 'vue3-highcharts'
  export default {
    name: 'PrefecturueChart',
    components: {
      VueHighcharts,
    },
    props: {
      // eslint-disable-next-line vue/prop-name-casing
      prefectures_data: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        chartOptions: {
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
          },
          title: {
            text: '',
          },
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false,
              },
              pointInterval: 5,
              pointStart: 1980,
            },
          },
          yAxis: {
            title: {
              text: 'YAxis',
            },
          },
          xAxis: {
            title: {
              text: 'XAxis',
            },
          },
          series: this.prefectures_data,
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 500,
                },
                chartOptions: {
                  legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                  },
                },
              },
            ],
          },
        },
      }
    },
    methods: {
      onRender() {
        console.log('Chart rendered')
      },
      onUpdate() {
        console.log('Chart updated')
      },
      onDestroy() {
        console.log('Chart destroyed')
      },
    },
  }
</script>

<style></style>
