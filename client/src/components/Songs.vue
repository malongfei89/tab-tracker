<template>
    <v-content>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <Panel title="Songs">
          <v-btn fab dark small absolute right class="home cyan" slot="action" to="/songs/create">
            <v-icon>+</v-icon>
          </v-btn>
          <v-layout v-for="song in songs" :key="song.id">
            <v-flex md6 class="headline">
              {{song.id}}.
              {{song.title}}
              <br>
              <br>
              {{song.artist}}
              <br>
              <br>
              <br>
              <br>
              <v-btn class="home" :to="{name: 'song', params: {songID: song.id }}">View</v-btn>
            </v-flex>
            <v-flex md6>
              <v-img class="ml-3" :src="song.albumImageUrl" width="75%" />
            </v-flex>
          </v-layout>
        </Panel>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style>

</style>
