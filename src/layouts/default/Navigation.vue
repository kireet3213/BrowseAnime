<template>
  <v-app-bar density="comfortable" :elevation="2">
    <v-container fluid class="pa-0">
      <v-row align="center" justify="end" no-gutters>
        <v-col class="d-flex align-center justify-space-between">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-app-bar-title>Browse Your Favourite Anime</v-app-bar-title>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-menu min-width="100px">
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar color="#7C4DFF" size="large">
                  <v-img
                    src="Saitama_serious_profile.webp"
                    max-height="50"
                    width="10px"
                    id="menu-activator"
                  ></v-img>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <v-avatar color="#7C4DFF">
                    <span class="text-h5">{{ "KJ" }}</span>
                  </v-avatar>
                  <h3>{{ "Kirit Joshi" }}</h3>
                  <p class="text-caption mt-1">{{ "kireet@gmail.com" }}</p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text"> Edit Profile </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn rounded variant="text"> Logout </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <LeftDrawerComponent v-model="drawer" />

</template>
<script setup lang="ts">
import { ref } from "vue";
import LeftDrawerComponent from "@/components/LeftDrawerComponent.vue";

const drawer = ref(false);
</script>
<style scoped>

</style>
