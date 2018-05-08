import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import WhoWeAre from '@/components/WhoWeAre'
import WhoWeServe from '@/components/WhoWeServe'
import WhatWeDo from '@/components/WhatWeDo'
import ContactUs from '@/components/ContactUs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/who-we-are',
      name: 'who-we-are',
      component: WhoWeAre
    },
    {
      path: '/who-we-serve',
      name: 'who-we-serve',
      component: WhoWeServe
    },
    {
      path: '/what-we-do',
      name: 'what-we-do',
      component: WhatWeDo
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
  ]
})
