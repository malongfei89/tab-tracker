<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <Header>
          </Header>
          <!-- <img src="./assets/logo.png"> -->
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.home {
  cursor: pointer
}
.home:hover {
    color: black
}
</style>
