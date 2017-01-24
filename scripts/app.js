var Clothing = Backbone.Model.extend({
  defaults: {
    name: '',
    type: '',
    mood: '',
    weather: ''
  } 

});

var closet = new Closet(closetData);

//Collection for all clothes

var Closet = Backbone.Collection.extend({

  model: Clothing,

  initialize: function () {}
});



//View for one clothing

var ClothingView = Backbone.View.extend({
  tagName: 'tr',

  model: new Clothing(),

  initialize: function () {
    this.template = _.template($('.closet-list-template').html());
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }

  template: _.template('<div class="top"> \
    <span class="name"><%- name %></span> \
    <span class="type">(<%- type %>)</span>'),


})


//View for all clothes

var ClosetView = Backbone.View.extend({
  model: closet;
  el: $('.closet-list'),
  initialize: function () {
    this.model.on('add', this.render(), this);
  },
  render: function () {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function (clothing) {
      self.$el.append((new ClothingView({model: clothing})).render().$el)
    });
  } 

})

AppView = Backbone.View.extend({

  initialize: function(params) {
    this.closetView = new ClosetView({collection: this.model.get('')})
  }

})



