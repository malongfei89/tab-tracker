<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class= "home" @click="goto('home')">TabTracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn class="home" flat dark @click="goto('songs')">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="home" v-if="!$store.state.isUserLoggedIn" flat dark @click="goto('login')">Log In</v-btn>
      <v-btn class="home" v-else flat dark @click="logout">Log out</v-btn>
      <v-btn class="home" v-if="!$store.state.isUserLoggedIn" flat dark @click="goto('register')">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    goto (desti) {
      this.$router.push({name: desti})
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

</style>
