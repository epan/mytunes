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
    this.on('ended', function() {
      this.remove(this.models[0]);
      if (this.models.length) {
        this.playFirst();
      }
    }, this);

    // Remove song if it is dequeued
    this.on('dequeue', function(model) {
      this.remove(model);
    }, this);

    // Add song if it is queued
    this.on('enqueue', function(model) {
      // TODO: Figure out why enqueue is not adding songs
      // console.log('before add: ', this);
      this.add(model);
      // console.log('after add: ', this);
    }, this);
  },

  playFirst: function() {
    this.models[0].play();
  },

});
