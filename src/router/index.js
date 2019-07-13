import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from "../views/login"
import home from "../views/home"
import overtime from "../views/overtime"
import vacation from "../views/vacation"
import detail from "../views/detail"

Vue.use(Router)

export default new Router({
  routes: [{
      path:"/",
      redirect:"/home"
  },
    {
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/home',
      name: 'home',
      component: home,
      beforeEnter:(to,from,next)=>{
        if(!localStorage.token){
            next("/login")
        }else{
          next()
        }
      }
    },{
      path: '/overtime',
      name: 'overtime',
      component: overtime,
    }, {
      path: '/vacation',
      name: 'vacation',
      component: vacation,
    },{
      path:"/detail/:id",
      name:"detail",
      component: detail,
    }
  ]
})
