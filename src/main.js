import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customers from "./components/Customers"
import About from "./components/About"
import AddUser from "./components/AddUser"
import Edit from "./components/Edit"
import CustomerDetails from "./components/CustomerDetails"

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false

// 设置路由
const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Customers
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/addUser",
      component: AddUser
    },
    {
      path: "/customer/:id",
      component: CustomerDetails
    },
    {
      path: "/edit/:id",
      component: Edit
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')