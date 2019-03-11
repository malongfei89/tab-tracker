<template>
  <v-content>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              clearable
              label="Email"
              v-model="email">
            </v-text-field>
            <br>
            <v-text-field
              clearable
              type = 'password'
              label="Password"
              v-model="password">
            </v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn class="cyan" dark @click="login">login</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>
