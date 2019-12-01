<template>
  <div>
    <v-row justify="center">
      <v-col lg="5" md="8">
        <v-row>
          <v-col>
            <h5 class="headline">About Harm Matthias Harms</h5>
            <p class="subtitle-1">
              I'm a full-stack developer based in Hamburg, Germany. My interest
              goes into scalable web applications, as well as SaaS and PaaS. For
              my open source and side-projects, I like to explore new tools and
              languages. Currently, I'm building various cloud-native
              applications using Go and Nuxt.js, deployed on Kubernetes-based
              plattforms.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h5 class="headline">Tools</h5>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col v-for="(tool, index) in tools" :key="index">
                <v-avatar size="100">
                  <img :src="require(`~/assets/images/${tool}`)" />
                </v-avatar>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h5 class="headline">Languages</h5>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col v-for="(language, index) in languages" :key="index">
                <v-avatar size="100">
                  <img :src="require(`~/assets/images/${language}`)" />
                </v-avatar>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        "kubernetes.png",
        "docker.jpeg",
        "nuxt.jpg",
        "rails.png",
        "scrapy.png",
        "rancher.jpg",
        "postgresql.png",
        "mongo.jpeg",
        "rio.svg"
      ],
      languages: ["go.png", "js.png", "python.png", "ruby.png", "sql.png"]
    };
  }
};
</script>
