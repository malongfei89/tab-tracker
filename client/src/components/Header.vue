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
      <v-btn flat dark @click="gotologin">Log In</v-btn>
      <v-btn flat dark @click="gotoregister">Sign Up</v-btn>
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
