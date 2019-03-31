<template>
  <v-content>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <Panel title="Log in">
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
          <v-btn class="cyan home" flat dark @click="login">login</v-btn>
        </Panel>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
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
