<template>
  <v-layout row wrap style="min-width: 200px;">
    <v-flex>
      <v-row>
        <v-card :loading="!loadend" width="100%">
          <v-row>
            <v-col class="px-1 pt-2">
              <v-skeleton-loader
                style="min-width: 200px;"
                ref="skeleton"
                :boilerplate="false"
                :type="'image'"
                :loading="!loadend"
                class="mx-3"
              >
                <v-img :src="album.image['2']['#text']" />
              </v-skeleton-loader>
            </v-col>
            <v-col class="px-6">
              <v-skeleton-loader
                class="v-card-title"
                type="article"
                :loading="!loadend"
              >
                <v-card-title primary-title>{{ album.name }}</v-card-title>
                <v-card-subtitle primary-title>
                  {{ album.artist }}
                </v-card-subtitle>
                <template v-if="album.wiki">
                  <v-card-text>{{ album.wiki.summary }}</v-card-text>
                  <v-card-text
                    >Published: {{ album.wiki.published }}</v-card-text
                  >
                </template>
              </v-skeleton-loader>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row>
        <v-card width="100%">
          <v-subheader class="pl-10">TRACKS</v-subheader>
          <v-skeleton-loader class="px-4" type="list-item" :loading="!loadend">
            <v-col>
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
            </v-col>
          </v-skeleton-loader>
        </v-card>
      </v-row>
    </v-flex>
  </v-layout>
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
        wiki: {
          summary: ""
        },
        tracks: {
          track: []
        }
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
      })
      .catch(() => {
        this.$root.$children[0].$data.error = true;
      });
  },
  computed: {
    imageHeight() {
      console.log(this.$vuetify.breakpoint);
      return this.$vuetify.breakpoint.name;
    }
  },
  methods: {}
};
</script>

<style>
.v-skeleton-loader__image {
  padding-top: 100%;
}
</style>
