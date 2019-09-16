import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OdiScore from './components/OdiScore.vue'
import T20Score from './components/T20Score.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/odi/',
      name: 'odi',
      component: () =>
        import(/* webpackChunkName: "about" */ './components/OdiMatch.vue'),
      children: [
        {
          path: 'odiScore/:matchId',
          name: 'odiScore',
          component: OdiScore
        }
      ]
    },
    {
      path: '/t20/',
      name: 't20',
      component: () =>
        import(/* webpackChunkName: "about" */ './components/T20Match.vue'),
        children: [
          {
            path: 't20Score/:matchId',
            name: 't20Score',
            component: T20Score
          }
        ]
    }
  ]
})
