<template>
  <v-container grid-list-xs>
    <v-layout column max-width="300px">
      <v-card
        class="d-inline-block"
        v-for="(item, index) in topTracks"
        :key="index"
        min-width="300px"
      >
        <template>
          <v-card-title primary-title
            >{{ index + 1 }}. {{ item.name }}</v-card-title
          >
          <v-card-subtitle>
            <v-icon>mdi-play</v-icon>
            {{ item.playcount }}
            <v-icon>mdi-headphones</v-icon>
            {{ item.listeners }}
          </v-card-subtitle>
        </template>
      </v-card>
      <infinite-loading @infinite="infiniteHandle"></infinite-loading>
    </v-layout>
  </v-container>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "topTracks",
  components: { InfiniteLoading },
  data() {
    return {
      page: 1,
      topTracks: []
    };
  },
  beforeCreate() {
    this.$eventBus.$emit("changeNav", "TopTracks");
  },
  methods: {
    infiniteHandle($state) {
      this.$lastfm.chart
        .getTopTracks(this.page)
        .then(value => {
          if (value.data.tracks.track.length) {
            this.page += 1;
            this.topTracks.push(...value.data.tracks.track);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          this.$eventBus.$emit("error");
        });
    }
  }
};
</script>

<style></style>
