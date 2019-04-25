import Vue from 'vue'
import Router from 'vue-router'
import CreateArticle from './views/CreateArticle.vue'
import ListArticle from "./views/ListArticle.vue"
import EditArticle from "./views/EditArticle.vue"
import ShowArticle from "./views/ShowArticle.vue"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      redirect: "/articles/index"
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component: CreateArticle
    },
    {
      path: '/articles/list',
      name: 'list',
      component: ListArticle
    },
    {
      path: '/article/:id/edit',
      name: 'edit',
      component: EditArticle
    },
    {
      path: '/article/:id/show',
      name: 'show',
      component: ShowArticle
    }
  ]
})