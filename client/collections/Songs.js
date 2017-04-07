// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'http://parse.sfs.hackreactor.com/mytunes/classes/songs',
  model: SongModel,
  parse: function(data) {
    return data.results;
  },


  initialize: function() {
    this.fetch();
  }

});
