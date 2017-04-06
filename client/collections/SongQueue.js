// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // Play the song if only one song is added
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    }, this);

    // Remove song after it finishes playing
    this.on('ended', function(song) {
      this.remove(song);
      if (this.length) {
        this.playFirst();
      }
    }, this);

    // Remove song if it is dequeued
    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

});
