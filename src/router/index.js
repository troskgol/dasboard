import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/components/Frontpage'
import Powerhours from '@/components/Powerhours'
import State from '../state'

Vue.use(Router)

export default new Router({
  /*
  a simple Vue router
   */
  routes: [
    {
      path: '/',
      redirect: '/frontpage'
    },
    {
      path: '/powerhours',
      name: 'powerhours',
      component: Powerhours,
      props: { calendarData: State.getCalendarData() }
    },
    {
      path: '/frontpage',
      name: 'frontpage',
      component: Frontpage,
      props: {
        metrics: State.getReportMetrics(),
        passersby: State.getPassersby()
      }
    }
  ]
})
