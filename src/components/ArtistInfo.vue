<template>
  <v-layout mx-4 row wrap style="min-width: 200px;">
    <v-flex>
      <v-row>
        <v-card :loading="!loadend" width="100%">
          <v-row>
            <v-col class="px-1 pt-2">
              <v-responsive :aspect-ratio="16 / 9">
                <v-skeleton-loader
                  ref="skeleton"
                  :boilerplate="false"
                  :type="'image'"
                  class="mx-3"
                  v-if="!loadend"
                >
                </v-skeleton-loader>
                <v-img v-else :src="artist.image['3']['#text']" />
              </v-responsive>
            </v-col>
            <v-col class="pl-20">
              <v-skeleton-loader
                :class="'v-card-title ' + loadend ? 'ml-4 py-4' : ''"
                type="heading"
                :loading="!loadend"
              >
                <v-card-title style="word-break: inherit;" primary-title>
                  {{ artist.name }}
                </v-card-title>
              </v-skeleton-loader>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row>
        <v-card width="100%">
          <v-subheader class="pl-10">TOP ALBUMS</v-subheader>
          <v-skeleton-loader class="px-4" type="list-item" :loading="!loadend"
            ><ArtistTopAlbums />
          </v-skeleton-loader>
        </v-card>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import ArtistTopAlbums from "@/components/ArtistTopAlbums.vue";
export default {
  name: "ArtistInfo",
  data() {
    return {
      loadend: false,
      artist: [],
      test: false
    };
  },
  components: { ArtistTopAlbums },
  mounted() {
    this.$lastfm.chart
      .getArtistInfo(this.$route.params.name)
      .then(value => {
        this.loadend = true;
        this.artist = value.data.artist;
      })
      .catch(() => {
        this.$eventBus.$emit("error");
      });
    this.$eventBus.$emit("changeNav", "ArtistInfo");
  }
};
</script>

<style>
@media screen and (max-width: 469px) {
  .v-skeleton-loader__image {
    min-width: 410px;
  }
}
@media screen and (min-width: 469px) {
  .v-skeleton-loader__image {
    min-width: 300px;
  }
}
</style>
