<template>
  <v-layout grid-list-xs>
    <v-col>
      <ArtistTopAlbums />
    </v-col>
    <v-col>
      <ArtistTopTracks />
    </v-col>
  </v-layout>
</template>

<script>
// @ is an alias to /src

import ArtistTopTracks from "@/components/ArtistTopTracks.vue";
import ArtistTopAlbums from "@/components/ArtistTopAlbums.vue";
export default {
  name: "ArtistTops",
  components: {
    ArtistTopTracks,
    ArtistTopAlbums
  }
};
</script>
