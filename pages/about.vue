<template>
  <div>
    <v-layout row wrap justify-center class="mt-2">
      <v-flex lg6 md8 xs12>
        <h5 class="headline">About Harm Matthias Harms</h5>
        <p class="subheading">
          I'm a full-stack developer based in Hamburg, Germany.
          Currently, I'm writing my bachelor thesis about identifying small objects in images.
          But my interests go more into scalable web applications.
          For my open source and side projects, I love to use various tools and languages.
          <br />
          <br />Currently, I'm building various cloud native applications with Go and Nuxt.js for Kubernetes.
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center class="mt-2">
      <v-flex lg6 md8 xs12>
        <h5 class="headline">Tools</h5>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="mt-2">
      <v-flex lg6 md6 xs12>
        <v-layout row wrap>
          <v-flex
            justify-center
            align-center
            text-xs-center
            v-for="(tool, index) in tools"
            :key="index"
          >
            <v-avatar size="100">
              <img :src="tool" />
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center class="mt-2">
      <v-flex lg6 md8 xs12>
        <h5 class="headline">Languages</h5>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="mt-2">
      <v-flex lg6 md6 xs12>
        <v-layout row wrap>
          <v-flex
            lg3
            md6
            xs12
            justify-center
            align-center
            text-xs-center
            v-for="(language, index) in languages"
            :key="index"
          >
            <v-avatar size="100">
              <img :src="language" />
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        "/kubernetes.png",
        "/docker.jpeg",
        "/nuxt.jpg",
        "/rails.png",
        "/rook.jpg",
        "/scrapy.png",
        "/rancher.jpg",
        "/cockroachdb.jpg",
        "/postgresql.png"
      ],
      languages: ["/go.png", "/js.png", "/python.png", "/ruby.png", "/sql.png"]
    };
  }
};
</script>
