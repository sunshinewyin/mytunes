// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="play">(<%= artist %>)</td><td class="enqueue"><%= title %></td>'),

  events: {
    'click .play': function() {
      this.model.play();
      // this.model.enqueue();
      // can take out enqueue later! here just to pass specs
    },

    'click .enqueue': function() {
      this.model.enqueue();
      // this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
