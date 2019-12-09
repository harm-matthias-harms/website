<template>
  <div>
    <v-row justify="center">
      <v-col lg="8">
        <h5 class="headline">About Harm Matthias Harms</h5>
        <p class="subtitle-1">
          I'm a full-stack developer based in Hamburg, Germany. My interest
          goes into scalable web applications, as well as SaaS and PaaS. For
          my open source and side-projects, I like to explore new tools and
          languages. Currently, I'm building various cloud-native
          applications using Go and Nuxt.js, deployed on Kubernetes-based
          plattforms or Firebase.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="4" md="6">
        <h5 class="headline">Tools</h5>
        <p
          class="subtitle-1"
        >Not every tool can solve a specific problem. Therefore, I learned several tools. With new complicated problems, I will have a lot of fun learning new tools.</p>
      </v-col>
      <v-col lg="4" md="6" class="hidden-sm-and-down">
        <h5 class="headline">Languages</h5>
        <p class="subtitle-1">To use the tools I love, I learned several programming languages.</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="4" md="6">
        <v-timeline align-top dense>
          <v-timeline-item fill-dot large v-for="(item, i) in tools" :key="i" :icon="item.icon">
            <v-card color="primary" dark>
              <v-card-title class="title" v-text="item.title"></v-card-title>
              <v-card-text class="white text--primary pt-3" v-text="item.text"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="12" class="hidden-md-and-up">
        <h5 class="headline">Languages</h5>
        <p class="subtitle-1">To use the tools I love, I learned several programming languages.</p>
      </v-col>
      <v-col lg="4" md="6">
        <v-timeline align-top dense>
          <v-timeline-item
            fill-dot
            large
            color="secondary"
            v-for="(item, i) in languages"
            :key="i"
            :icon="item.icon"
          >
            <v-card color="secondary" dark>
              <v-card-title class="title" v-text="item.title"></v-card-title>
              <v-card-text class="white text--primary pt-3" v-text="item.text"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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
          title: "Rails",
          text:
            "Rails is your choice when you want to get up and running very fast."
        },
        {
          icon: "",
          title: "Nuxt JS",
          text:
            "Awesome tool to build frontends. I mostly use is for static site generation, but I also love the architecture and tooling."
        },
        {
          icon: "",
          title: "Echo",
          text:
            "Want to build superfast HTTP backends, then echo is your choice. Echo provides many features and middlewares, missing an ORM to make it complete."
        },
        {
          icon: "",
          title: "Firebase",
          text:
            "Firebase makes ist easy developing serverless applications fastly."
        },
        {
          icon: "fa-dharmachakra",
          title: "Kubernetes",
          text:
            "Lovely container orchestration to build planet scale techstacks."
        },
        {
          icon: "fab fa-docker",
          title: "Docker",
          text:
            "Docker helps me to build containerized applications, which run in any environment."
        },
        {
          icon: "",
          title: "Rancher",
          text:
            "Rancher makes managing Kubernetes too easy, also for bare-metal."
        },
        {
          icon: "",
          title: "Rio",
          text:
            "Build by RancherLabs, Rio is a MicroPaaS layered on top of Kubernetes. It makes running and scaling stateless workloads a task for seconds."
        },
        {
          icon: "",
          title: "Scrapy",
          text:
            "It makes web crawling very easy. It also has some nice pipelining functionality."
        },
        {
          icon: "",
          title: "Postgresql",
          text:
            "Performant SQL database. I like more scaleable variants, like yugabyteDB."
        },
        {
          icon: "",
          title: "MongoDB",
          text:
            "Some NoSQL-database, working great, but possibly better variants out there."
        }
      ],
      languages: [
        {
          icon: "fa-gem",
          title: "Ruby",
          text:
            "Ruby is lovely with and without Rails. It could be more performant."
        },
        {
          icon: "",
          title: "Go",
          text:
            "Go is performant and fun to write. I love it for backends, heavy workloads, and DevOps."
        },
        {
          icon: "fab fa-js",
          title: "Javascript",
          text:
            "JS and TS are both fun and make easy programming and awesome websites possible."
        },
        {
          icon: "fab fa-python",
          title: "Python",
          text:
            "Web crawling, scripting, data science, computer vision are all easy when using Python."
        },
        {
          icon: "",
          title: "SQL",
          text:
            "SQL is somehow not a real language to me but makes performant querying of a database possible, when ORM's have not enough functionality."
        }
      ]
    };
  }
};
</script>