<template>
  <v-app>
    <v-app-bar app flat dense color="white">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/" nuxt>Home</v-btn>
        <v-btn text to="/about" nuxt>About Me</v-btn>
        <v-btn text to="/projects" nuxt>Projects</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
