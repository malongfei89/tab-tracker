import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Register from '../components/Register'
import Login from '../components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'song-create',
      component: CreateSong
    },
    {
      path: '/song/:songID',
      name: 'song',
      component: ViewSong
    }
  ]
})
