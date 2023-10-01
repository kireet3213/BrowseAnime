<template>
  <v-container fluid v-if="animeData.length">
    <v-sheet class="mx-auto" elevation="8">
      <v-slide-group v-model="model" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="(n, i) in animeData" :key="i">
          <v-container fluid class="ma-0 pa-0">
            <v-row align="center" justify="center" class="pr-2">
              <v-col>
                <v-card
                  color="grey-lighten-1"
                  height="300"
                  width="200"
                  variant="tonal"
                >
                  <v-img
                    class="align-end text-white"
                    height="350"
                    :src="n.images.jpg.large_image_url"
                    :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
                    cover
                  >
                    <v-card-title>{{ n.titles[0].title }}</v-card-title>
                    <template v-slot:placeholder>
                      <div
                        class="d-flex align-center justify-center fill-height"
                      >
                        <v-progress-circular
                          v-if="isLoading"
                          color="grey-lighten-4"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>

  <v-container fluid v-else>
    <v-row align="center" no-gutters style="height: 150px">
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex justify-center">
          <v-progress-circular
            color="dark-blue"
            model-value="20"
            indeterminate
          ></v-progress-circular>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { getRequest } from "../services/apiCall";
interface AnimeData {
  images: {
    jpg: {
      large_image_url: string;
      image_url: string;
    };
  };
  titles: Array<{ title: string; type: string }>;
}
const model = ref(null);
const animeData = ref<AnimeData[]>([]);
const isLoading = ref(true);

const getTopAnime = async function () {
  const { data } = await getRequest("top/anime");
  animeData.value = data.data;
  isLoading.value = false;
};
onMounted(() => {
  getTopAnime();
});
</script>
<style></style>
