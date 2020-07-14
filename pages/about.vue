<template>
  <div>
    <v-row justify="center">
      <v-col lg="8">
        <h1 class="display-1">About Harm Matthias Harms</h1>
        <p class="body-1">
          I'm a full-stack developer based in Hamburg, Germany.
          Scalable web applications interest me, as well as SaaS and PaaS.
          For my open source and side-projects, I like to explore new frameworks and languages.
          Currently, I'm building various cloud-native applications using Go and Nuxt.js, deployed on Kubernetes or Firebase.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="8">
        <h5 class="headline">Languages</h5>
        <v-chip label color="primary" class="mr-2 mt-2" v-for="(language, i) in languages" :key="i">
          <v-icon left>{{language.icon}}</v-icon>
          {{language.title}}
        </v-chip>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="8">
        <h5 class="headline">Tools</h5>
        <v-chip label color="secondary" class="mr-2 mt-2" v-for="(tool, i) in tools" :key="i">
          <v-icon left>{{tool.icon}}</v-icon>
          {{tool.title}}
        </v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          icon: "",
          title: "Rails"
        },
        {
          icon: "",
          title: "Nuxt JS"
        },
        {
          icon: "",
          title: "Scrapy"
        },
        {
          icon: "",
          title: "PyTorch"
        },
        {
          icon: "",
          title: "Labstack Echo"
        },
        {
          icon: "fab fa-docker",
          title: "Docker"
        },
        {
          icon: "",
          title: "Firebase"
        },
        {
          icon: "fa-dharmachakra",
          title: "Kubernetes"
        },
        {
          icon: "",
          title: "Rancher"
        },
        {
          icon: "",
          title: "Postgresql"
        },
        {
          icon: "",
          title: "MongoDB"
        }
      ],
      languages: [
        {
          icon: "fa-gem",
          title: "Ruby"
        },
        {
          icon: "",
          title: "Go"
        },
        {
          icon: "fab fa-js",
          title: "Javascript"
        },
        {
          icon: "fab fa-python",
          title: "Python"
        },
        {
          icon: "",
          title: "SQL"
        }
      ]
    };
  }
};
</script>