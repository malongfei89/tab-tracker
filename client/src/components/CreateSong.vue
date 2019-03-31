<template>
  <v-container fluid>
    <v-layout justify-center= true>
        <v-flex xs4 v-if="!isSongCreated">
          <Panel title="Create new song" >
            <v-text-field
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Title"
              v-model="song.title">
            </v-text-field>
            <v-text-field
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Artist"
              v-model="song.artist">
            </v-text-field>
            <v-text-field
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Genre"
              v-model="song.genre">
            </v-text-field>
            <v-text-field
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Album"
              v-model="song.album">
            </v-text-field>
            <v-text-field
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Album Image Url"
              v-model="song.albumImageUrl">
            </v-text-field>
            <v-text-field
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Youtube ID"
              v-model="song.youtubeId">
            </v-text-field>
          </Panel>
        </v-flex>
        <v-flex xs8 v-if="!isSongCreated">
          <Panel title="" class="ml-3">
            <v-textarea
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Lyrics"
              v-model="song.lyrics">
            </v-textarea>
            <v-textarea
              :rules="[required]"
              clearable
              clear-icon="x"
              label="Tab"
              v-model="song.tab">
            </v-textarea>
          </Panel>
          <v-btn class="cyan home" dark @click="createSong">Create</v-btn>
          <div style="color:red" v-html="error" />
        </v-flex>
        <div v-else>
          <p class="display-2">Congratulations!</p>
          <p class="display-2">It's been successfully added to the song's list!</p>
          <p class="display-2">Click <router-link to="/songs">Here</router-link> to view it!</p>
        </div>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from './Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      isSongCreated: false
    }
  },
  components: {
    Panel
  },
  methods: {
    async createSong () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all fields.'
        return
      }
      try {
        await SongsService.createSong(this.song)
        this.isSongCreated = true
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    required: (value) => !!value || 'Required.'
  }
}
</script>

<style>

</style>
