# lastfm

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

[(infinite)](https://peachscript.github.io/vue-infinite-loading/guide/#installation)

### Тестовое задание

-   Используя API сервиса last.fm отобразить:
    -   ~~топ исполнителей [(chart.getTopArtists)](https://www.last.fm/api/show/chart.getTopArtists)~~
    -   ~~топ песен [(chart.getTopTracks)](https://www.last.fm/api/show/chart.getTopTracks)~~ non INTERECTIVE
    -   ~~топ альбомов этого исполнителя [(artist.getTopAlbums)](https://www.last.fm/api/show/artist.getTopAlbums)~~
    -   ~~топ песен этого исполнителя [(artist.getTopTracks)](https://www.last.fm/api/show/artist.getTopTracks) ~~
    -   ~~информацию об альбомах исполнителя [(album.getInfo)](https://www.last.fm/api/show/album.getInfo)~~
-   Веб-приложение со следующими страницами:
    -   Главная страница с топом исполнителей в плиточном формате, отобразить
        -   ~~название~~
        -   фотографию
        -   ~~количество прослушиваний~~
        -   ~~количество одновременных слушателей~~
    -   Страница с топом песен в плиточном формате
        -   ~~название~~
        -   обложка альбома
        -   ~~количество прослушиваний~~
        -   ~~количество одновременных слушателей~~
    -   Страница исполнителя с топом его альбомов в плиточном формате
        -   название
        -   обложка
        -   количество одновременных слушателей
    -   Страница информации об альбоме
        -   ~~название~~
        -   ~~обложка~~
        -   ~~дата релиза~~,
        -   ~~количество прослушиваний~~
        -   количество одновременных слушателей
        -   ~~список песен в альбоме с указанием длительности~~
-   Запросы к API осуществляются через [axios](https://github.com/axios/axios)
    в файле `src/plugins/lastfm.js` и доступны через `this.$lastfm`
-   В качестве css-фреймворка используйте [vuetify](https://vuetifyjs.com/ru/)
-   Для роутинга используйте [vue-router](https://router.vuejs.org/ru/)
-   Отображать ошибки при запросах и прогресс во время загрузок данных
-   Дополнительно для списков реализовать бесконечную прокрутку с помощью [vue-infinite-loading](https://www.npmjs.com/package/vue-infinite-loading)
-   Дополнительно реализовать [skeleton-loading](https://vuetifyjs.com/ru/components/skeleton-loaders/) при загрузке данных
