import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  createSong (credentials) {
    return Api().post('songs/create', credentials)
  }
}
