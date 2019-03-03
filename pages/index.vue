<template>
   <v-layout row wrap>
     <v-flex xs12 justify-center align-center text-xs-center layout>
       <v-avatar
          size="256"
          color="grey lighten-4"
        >
          <img src="/me.jpg" alt="avatar">
        </v-avatar>
     </v-flex>
     <v-flex xs12 justify-center align-center text-xs-center class="mt-3">
       <h3 class="display-2">Harm Matthias Harms</h3>
       <h5 class="headline font-weight-light">Student, Full Stack Developer, Kubernetes Lover, USAR - Troopleader</h5>
     </v-flex>
     <v-flex class="mt-4" xs12 justify-center align-center text-xs-center>
       <v-btn depressed large href="mailto:harm-matthias.harms@gmx.de"><v-icon left>fa-envelope</v-icon> Email</v-btn>
       <v-btn depressed large href="https://github.com/harm-matthias-harms"><v-icon left>fa-github</v-icon> Code</v-btn>
     </v-flex>
   </v-layout>
</template>

<script>

export default {
 
}
</script>

<style>
img {
  width: 100%;
  height: 100%;
  object-fit: cover; /*magic*/
}
</style>
