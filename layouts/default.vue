<template>
  <v-app>
    <v-toolbar flat dense>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/" nuxt>Home</v-btn>
        <v-btn flat to="/about" nuxt>About Me</v-btn>
        <v-btn flat to="/projects" nuxt>Projects</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>
