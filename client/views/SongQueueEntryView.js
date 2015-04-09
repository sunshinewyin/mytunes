// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="play">(<%= artist %>)</td><td class="enqueue"><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
