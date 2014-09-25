// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: 'table',

  initialize: function() {
    this.collection.on('add remove', function() {
      this.render();
    }, this);
  },

  render: function() {
    console.log('test')
    this.$el.children().detach();

    this.$el.html('<th>Play List</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
