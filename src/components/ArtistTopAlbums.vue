<template>
  <v-container>
    <v-layout
      v-for="(item, index) in topAlbums"
      :key="index"
      ma-4
      @click="
        $router.push({
          name: 'ArtistAlbumInfo',
          params: { albumname: item.name }
        })
      "
    >
      <v-sheet min-width="500px" width="100%">
        <v-row :align="'start'" :justify="'start'">
          <v-img
            max-width="100px"
            height="100px"
            :src="item.image[2]['#text']"
          ></v-img>
          <v-col min-width="100px">
            <v-card-title primary-title
              >{{ index + 1 }}. {{ item.name }}</v-card-title
            >
            <v-card-subtitle>
              <v-icon>mdi-play</v-icon>
              {{ item.playcount }}
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-sheet>
    </v-layout>
    <!-- <v-skeleton-loader type="list-item"> </v-skeleton-loader> -->
    <infinite-loading @infinite="infiniteHandle"></infinite-loading>
  </v-container>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "ArtistTopAlbums",
  components: { InfiniteLoading },
  data() {
    return {
      page: 1,
      topAlbums: []
    };
  },
  beforeCreate() {
    this.$eventBus.$emit("changeNav", "ArtistTopAlbums");
  },
  methods: {
    infiniteHandle($state) {
      this.$lastfm.chart
        .getArtistTopAlbums(this.page, this.$route.params.name)
        .then(value => {
          if (value.data.topalbums.album.length) {
            this.page += 1;
            this.topAlbums.push(...value.data.topalbums.album);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(() => {
          this.$eventBus.$emit("error");
        });
    }
  }
};
</script>

<style></style>
