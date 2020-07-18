<template>
    <div class="g-box">
      <el-row :gutter="20">
          <el-col :span="6">
              <el-card shadow="hover">
                  <CommonCard title="累计销售额" value="￥ 2341.00">
                      <div style="margin-left: 10px;">
                          <div>
                              <span>日同比：16%</span>
                          </div>
                          <div>
                              <span>月同比：60%</span>
                          </div>
                      </div>
                      <template #footer>
                          <span>昨日销售额：</span>
                          <span style="{font-weight: bold}">1000元</span>
                      </template>
                  </CommonCard>
              </el-card>
          </el-col>
          <el-col :span="6">
              <el-card shadow="hover">
                  <CommonCard title="累计订单量" value="23414.00">
                      <div id="total__orders__chart" style="width: 100%; height: 100%"
                           ref="totalChart">
                      </div>
                      <template #footer>
                          <span>昨日订单量：</span>
                          <span style="{font-weight: bold}">1000</span>
                      </template>
                  </CommonCard>
              </el-card>
          </el-col>
          <el-col :span="6">
              <el-card shadow="hover">
                  <CommonCard title="今日交易用户数" value="45000">
                      <div id="total__users__chart" style="width: 100%; height: 100%">
                      </div>
                      <template #footer>
                          <span>退货率：</span>
                          <span style="{font-weight: bold}">10%</span>
                      </template>
                  </CommonCard>
              </el-card>
          </el-col>
          <el-col :span="6">
              <el-card shadow="hover">
                  <CommonCard title="累计用户数" value="1087053">
                      <div id="all__users__chart" style="width: 100%; height: 100%">
                      </div>
                      <template #footer>
                          <span>日同比：</span>
                          <span style="{font-weight: bold}">8.73%</span>
                      </template>
                  </CommonCard>
              </el-card>
          </el-col>
      </el-row>
    </div>
</template>

<script>
    import CommonCard from '../CommonCard'
    export default {
        name: 'TopView',
        components: {
            CommonCard
        },
        mounted() {
            this.initOrdersCharts();
            this.initUsersCharts();
            this.initAllUsersCharts();
        },
        methods: {
            initAllUsersCharts() {
                const chartDom = document.getElementById('all__users__chart');
                const chart = this.$echarts.init(chartDom);
                chart.setOption({
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        // y轴进行分类
                        type: 'category',
                        show: false
                    },
                    series: [{
                        type: 'bar',
                        data: [200],
                        // 利用stack把同一系列的数据合并到一起
                        stack: 'total',
                        barWidth: 10,
                        itemStyle: {
                            color: '#45c946'
                        }
                    },{
                        type: 'bar',
                        data: [250],
                        stack: 'total'
                    },{
                        type: 'custom',
                        stack: 'total',
                        data: [200],
                        renderItem: (params, api) => {
                            const value = api.value(0);
                            // 获取坐标系，传入数据，使数据和坐标轴关联
                            const point = api.coord([value, 0])
                            return {
                                type: 'group',
                                position: point,
                                children: [{
                                    shape: {
                                        d: '',  // 从svg上下载拿path
                                        x: 0,
                                        y: 0,
                                        width: 20,
                                        height: 20
                                    },
                                    style: {
                                        fill: 'red'
                                    }
                                }
                                ]
                            }
                        }
                    }],
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }
                })
            },
            initUsersCharts() {
                const chartDom = document.getElementById('total__users__chart');
                const chart = this.$echarts.init(chartDom);
                chart.setOption({
                    color: ['#3398DB'],
                    series: [{
                        type: 'bar',
                        data: [122, 211, 121, 123, 222, 111, 150, 55, 128, 104],
                        barWidth: '60%'
                    }],
                    xAxis: {
                        type: 'category',
                        data: ['00:00', '01:00','02:00','03:00','04:00','05:00','06:00'
                        ,'70:00','80:00','90:00'],
                        show: false
                    },
                    yAxis: {
                        show: false
                    },
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }
                })
            },
            initOrdersCharts() {
                const chartDom = document.getElementById('total__orders__chart');
                const chart = this.$echarts.init(chartDom);
                chart.setOption({
                    xAxis: {
                        type: 'category',
                        show: false,
                        boundaryGap: false
                    },
                    yAxis: {
                        show: false
                    },
                    series: [{
                        type: 'line',
                        data: [122, 211, 121, 123, 222, 111, 150, 55, 128, 104],
                        // 设置面积区域
                        areaStyle: {
                            color: 'purple'
                        },
                        lineStyle: {
                            width: 0
                        },
                        // 坐标点
                        itemStyle: {
                            opacity: 0
                        },
                        smooth: true
                    }],
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }
                })
            }
        }
    }
</script>


<style scoped>
#total__orders__chart {

}
</style>
