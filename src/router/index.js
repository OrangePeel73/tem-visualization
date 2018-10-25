import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EchartDemo1 from '@/pages/echart-ui/echart-demo'
import Weather from '@/pages/weather/weather.vue'
import Antv from '@/pages/antv/antv.vue'
import Antv2 from '@/pages/antv/antv2.vue'
import HeatMap from '@/pages/antv/heatmap.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/echart-demo1',
      name: 'EchartDemo1',
      component: EchartDemo1
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/antv',
      name: 'Antv',
      component: Antv
    },
    {
      path: '/antv2',
      name: 'Antv2',
      component: Antv2
    },
    {
      path: '/heatmap',
      name: 'HeatMap',
      component: HeatMap
    }
  ]
})