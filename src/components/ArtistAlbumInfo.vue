<template>
  <v-container grid-list-xs>
    <v-card class="mx-auto" :loading="!loadend" min-width="     416px">
      <v-layout class="elevation-24">
        <v-row>
          <v-col>
            <v-skeleton-loader
              ref="skeleton"
              :boilerplate="false"
              :type="'image'"
              :loading="!loadend"
            >
              <v-img :src="album.image['2']['#text']" />
            </v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader
              class="v-card-title"
              type="article"
              :loading="!loadend"
            >
              <v-card-title primary-title>{{ album.name }}</v-card-title>
              <v-card-subtitle primary-title>
                {{ album.artist }}
              </v-card-subtitle>
              <v-card-text>{{ album.wiki.summary }}</v-card-text>
              <v-card-text>Published: {{ album.wiki.published }}</v-card-text>
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </v-layout>
    </v-card>

    <v-skeleton-loader type="list-item" :loading="!loadend">
      <v-card>
        <v-subheader>TRACKS</v-subheader>
        <v-list
          v-for="(item, index) in album.tracks.track"
          :key="index"
          two-line
          nav
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ item["@attr"].rank }}.
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle
                >{{ Math.floor(item.duration / 60) }}:{{
                  item.duration % 60
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-skeleton-loader>
  </v-container>
</template>

<script>
export default {
  name: "ArtistAlbumInfo",
  components: {},
  data() {
    return {
      loadend: false,
      album: {
        image: ["", "", "", ""],
        wiki: { summary: "" },
        tracks: { track: [] }
      }
    };
  },
  beforeCreate() {
    this.$lastfm.chart
      .getAlbumInfo(
        this.page,
        this.$route.params.name,
        this.$route.params.albumname
      )
      .then(value => {
        this.loadend = true;
        this.album = value.data.album;
      });
  },
  methods: {}
};
</script>

<style>
.v-skeleton-loader__image {
  padding-top: 100%;
}
</style>
