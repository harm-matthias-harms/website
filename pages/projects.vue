<template>
  <v-row justify="center">
    <v-col lg="9">
      <h1 class="display-1 text-center mb-5">Some of my Projects</h1>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item fill-dot v-for="(item, i) in data" :key="i">
          <template v-slot:opposite>
            <span class="headline text--primary" v-text="item.time"></span>
          </template>
          <v-card color="primary" dark>
            <v-card-title class="title" v-text="item.title"></v-card-title>
            <v-card-subtitle v-text="item.time" v-if="$vuetify.breakpoint.smAndDown"></v-card-subtitle>
            <v-card-text class="body-1 white text--primary pt-3" v-text="item.text"></v-card-text>
            <v-card-actions v-if="item.external">
              <v-btn text :href="item.external" target="_blank">
                <v-icon left>fab fa-github</v-icon>View on Github
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          time: "2018 - today",
          title: "EU Modex - Roleplay Management",
          text:
            "With the medical exercises in EU-Modex-Cycles (EU Civil Protection) growing over time, the patient and medical inject planning can't be done by pen and paper anymore. Therefore I have written a planning tool. The system was battle-tested multiple times in some of the world's biggest medical exercises, where roleplayers played 2500+ injuries in 48h.",
          external: "https://github.com/harm-matthias-harms/rpm"
        },
        {
          time: "2017 - today",
          title: "Analyse & Konzepte",
          text:
            "I'm currently working at a prop-tech start-up. As a full-stack developer, I'm planning and developing different big data and analytical applications. Besides developing, I'm educating newer colleagues."
        },
        {
          time: "2019",
          title: "AttentionBox",
          text:
            "In my bachelor thesis, I evaluated AttentionMask, an instance segmentation method, with a box regressor. With AttentionBox, I proposed an efficient method generating object proposals with state-of-the-art performance. AttentionBox decreases the runtime of AttentionMask by 32% because the boxes don't need to be derived from masks anymore. While running at 7fps, AttentionBox has a decent performance detecting small and tiny objects.",
          external: "https://github.com/harm-matthias-harms/AttentionBox"
        },
        {
          time: "2018 - 2019",
          title: "Vivre",
          text:
            "In a university course, we were building real applications with real customers. I managed a team, besides programming and planning work, creating an App for Weinmann Emergency. The App should improve the information flow of patient data and life signs on the way from the emergency side to the hospital."
        }
      ]
    };
  }
};
</script>
<style>
.v-card__title {
  word-break: break-word;
}
</style>
