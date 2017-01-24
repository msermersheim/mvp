var Clothing = Backbone.Model.extend({
  


});

var Closet = Backbone.Collection.extend({

  model: Clothing,

  initialize: function () {}
});



var ClothingView = Backbone.View.extend({

  template: _.template('<div class="top"> \
    <span class="name"><%- name %></span> \
    <span class="type">(<%- type %>)</span>'),


})


var ClosetView = Backbone.View.extend({


})

AppView = Backbone.View.extend({

  events: {

  }
})



