<template>
  <v-container grid-list-xs>
    <v-layout column max-width="300px">
      <v-card
        class="d-inline-block"
        v-for="(item, index) in topArtist"
        :key="index"
        min-width="300px"
        @click="$router.push({ name: 'Artist', params: { name: item.name } })"
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
  name: "TopArtist",
  components: {
    InfiniteLoading
  },
  data() {
    return {
      page: 1,
      topArtist: []
    };
  },

  beforeCreate() {
    this.$eventBus.$emit("changeNav", "TopArtist");
  },
  methods: {
    infiniteHandle($state) {
      this.$lastfm.chart
        .getTopArtist(this.page)
        .then(value => {
          if (value.data.artists.artist.length) {
            this.page += 1;
            this.topArtist.push(...value.data.artists.artist);
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
