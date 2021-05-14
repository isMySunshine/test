import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/main',
      component: HelloWorld,
      children: [
        {
          path: '/main',
          component: main
        }
      ]
    }
  ]
})
