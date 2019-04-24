<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Signup form</v-toolbar-title>
          </v-toolbar>
          <v-form @submit.prevent="signup" v-model="valid" lazy-validation>
            <v-card-text>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
                v-model="email"
                :rules="[rules.required, rules.email, rules.length]"
                required
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :rules="[rules.required, rules.length]"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" :disabled="!valid">Signup</v-btn>
              <router-link to="login" style="text-decoration:none">
                <v-btn>Login</v-btn>
              </router-link>
            </v-card-actions>
          </v-form>
        </v-card>TRY ACCESS /home, YOU CAN'T
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: "",
      password: "",
      valid: true,
      rules: {
        required: v => !!v || 'Wajib diisi!',
        email: v => /.+@.+/.test(v) || 'Format email salah',
        length: v => (v || '').length >= 5 || 'Minimal 5 karakter!'
      }
    }
  },
  methods: {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
    }
  }
}
</script>
