<template>
  <div>
    <v-toolbar color="indigo" dark fixed>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="cyan--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-icon>home</v-icon>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/datatable">Data List</v-btn>
        <v-btn flat>Sign in</v-btn>
        <v-btn flat to="/login">Login</v-btn>
 
        <v-btn flat to="/httpquotes">Http Quotes</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickSignup () {
      alert('you click signup')
    }
  }
}
</script>
