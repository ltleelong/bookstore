import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Add from '@/components/Add.vue';
import List from '@/components/List.vue';
import Detail from '@/components/Detail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
