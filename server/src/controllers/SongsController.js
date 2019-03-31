const { Songs } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Songs.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to retrive songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Songs.create(req.body)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to create song'
      })
    }
  }
}
