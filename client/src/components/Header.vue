<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class= "home" @click="gotohome">TabTracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="gotologin">Log In</v-btn>
      <v-btn v-else flat dark @click="logout">Log out</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="gotoregister">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    gotoregister () {
      this.$router.push({name: 'register'})
    },
    gotohome () {
      this.$router.push({name: 'home'})
    },
    gotologin () {
      this.$router.push('login')
    },
    logout () {
      this.$router.push('/login')
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer
}
.home:hover {
    color: black
}
</style>
