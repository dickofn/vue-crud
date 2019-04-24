<template>
  <v-container grid-list-xs>
    <p>TRY ACCESS /login or /signup, YOU CAN'T</p>
    <v-btn @click="logout">Logout</v-btn>
  </v-container>
</template>

<script>
import firebase from "firebase"

export default {
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>
</style>
