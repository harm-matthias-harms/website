<template>
  <v-row justify="center">
    <v-col>
      <v-row>
        <v-col class="text-center">
          <v-avatar size="256" color="grey lighten-4">
            <v-img src="~/assets/images/me.jpg" class="profile-img" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <h1 class="display-2">Harm Matthias Harms</h1>
          <h2
            class="headline font-weight-light"
          >Student, Full Stack Developer, Cloud, USAR - Troopleader</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn depressed large color="primary" href="mailto:mail@matthiasharms.dev">
            <v-icon left>fa-envelope</v-icon>Email
          </v-btn>
          <v-btn depressed large color="secondary" href="https://github.com/harm-matthias-harms" target="_blank" rel="noopener">
            <v-icon left>fab fa-github</v-icon>Code
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style>
img.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
