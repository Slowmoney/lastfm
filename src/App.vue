<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <v-btn
        v-if="this.$router.history.current.fullPath != '/'"
        text
        icon
        color="primary"
        @click="$router.go(-1)"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <v-bottom-navigation v-model="bottomNav">
        <v-btn value="Home">
          <span>Home</span>
          <v-icon>mdi-poll</v-icon>
        </v-btn>
        <template
          v-if="baseRoutes.indexOf(this.$router.history.current.name) !== -1"
        >
          <v-btn value="TopTracks">
            <span>Chart</span>
            <v-icon>mdi-poll</v-icon>
          </v-btn>
          <v-btn value="TopArtist">
            <span>Top Artist</span>
            <v-icon>mdi-align-vertical-top</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <v-btn value="Artist">
            <span>Artist</span>
            <v-icon>mdi-poll</v-icon>
          </v-btn>
          <v-btn value="ArtistTopTracks">
            <span>ArtistTopTracks</span>
            <v-icon>mdi-poll</v-icon>
          </v-btn>
          <v-btn value="ArtistTopAlbums">
            <span>ArtistTopAlbums</span>
            <v-icon>mdi-poll</v-icon>
          </v-btn>
        </template>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    bottomNav: "Home",
    baseRoutes: ["Home", "TopTracks", "TopArtist"]
  }),
  watch: {
    bottomNav(e) {
      console.log(this.$router, e);
      this.$router.push({
        name: e
      });
    }
  }
};
</script>
