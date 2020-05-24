<template>
  <v-layout>{{ artist }}</v-layout>
</template>

<script>
export default {
  name: "ArtistInfo",
  data() {
    return {
      artist: []
    };
  },
  beforeCreate() {
    this.$lastfm.chart
      .getArtistInfo(this.$route.params.name)
      .then(value => {
        this.loadend = true;
        this.artist = value.data.artist;
      })
      .catch(() => {
        this.$root.$children[0].$data.error = true;
      });
  }
};
</script>

<style></style>
