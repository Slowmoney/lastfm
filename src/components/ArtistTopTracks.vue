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
  methods: {
    infiniteHandle($state) {
      console.log(this.$root.$children[0].$data);
      console.log(this.$route);
      this.$lastfm.chart
        .getArtistTopTracks(this.page, this.$route.params.name)
        .then(value => {
          if (value.data.toptracks.track.length) {
            this.page += 1;
            this.topTracks.push(...value.data.toptracks.track);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(() => {
          this.$root.$children[0].$data.error = true;
        });
    }
  }
};
</script>

<style></style>
