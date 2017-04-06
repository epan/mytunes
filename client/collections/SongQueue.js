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
  },

  playFirst: function() {
    console.log('from playFirst: ', this);
    this.models[0].play();
  },

});
