import Vue from "vue";
import VueRouter from "vue-router";
import TopArtist from "@/components/TopArtist.vue";
import ArtistTopAlbums from "@/components/ArtistTopAlbums.vue";
import TopTracks from "@/components/TopTracks.vue";
import ArtistTopTracks from "@/components/ArtistTopTracks.vue";
import ArtistAlbumInfo from "@/components/ArtistAlbumInfo.vue";
import ArtistInfo from "@/components/ArtistInfo.vue";

import Artist from "@/views/Artist.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: TopArtist
  },
  {
    path: "/chart/",
    name: "TopTracks",
    component: TopTracks
  },
  {
    path: "/top/",
    name: "TopArtist",
    component: TopArtist
  },
  {
    path: "/artist/:name",
    name: "Artist",
    component: /* Artist */ ArtistInfo,
    children: [
      /* { path: "albums", component: ArtistTopAlbums, name: "ArtistTopAlbums" }, */
      /*  { path: "top", component: ArtistTopTracks, name: "ArtistTopTracks" } */
    ]
  },
  {
    path: "/artist/:name/top",
    name: "ArtistTopTracks",
    component: ArtistTopTracks
  },
  {
    path: "/artist/:name/albums",
    name: "ArtistTopAlbums",
    component: ArtistTopAlbums
  },

  {
    path: "/artist/:name/album/:albumname",
    name: "ArtistAlbumInfo",
    component: ArtistAlbumInfo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
