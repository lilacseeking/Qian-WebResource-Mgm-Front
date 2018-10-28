import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Login'
import NotFound from './views/404.vue'
import Home from './views/home/Home'
import HelloWorld from './views/testComponent/HelloWorld'
import Test from './views/user/test'

// 用户管理
import UserMgm from './views/user/userMgm'

let routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '用户管理',
    iconCls: 'el-icon-menu',
    children: [
      // {path:'/',redirect:'userMgm', hidden: true},
      {path:'/userMgm',component: UserMgm, name:'用户列表'},
      // {path:'/test',component: Test, name:'测试路由'},
    ]
  },
];

Vue.use(Router);

export default new Router({
  routes: routes
})
