var Clothing = Backbone.Model.extend({
  defaults: {
    name: '',
    type: '',
    mood: '',
    weather: ''
  } 

});


//Collection for all clothes

var Closet = Backbone.Collection.extend({

  model: Clothing,

  initialize: function () {}

});

//View for one clothing

var ClothingView = Backbone.View.extend({
  tagName: 'tr',

  model: new Clothing(),

  // template: _.template('<div class="clothing"> \
  //                         <span class="name"><%= name %></span> \
  //                         <span class="type">(<%= type %>)</span> \
  //                         <span class="mood">(<%= mood %>)</span> \
  //                         <span class="weather">(<%= weather %>)</span> \
  //                       </div>'),

  initialize: function() { 
    this.template = _.template($('.closet-list-template').html())

    // console.log(this.model.attributes)
  },


  //model: closet,

  // initialize: function () {
  //   this.template = _.template($('.closet-list-template').html());
  // },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;

  }

  //template: _.template('<div class="top"><span class="name"><%- name %></span><span class="type">(<%- type %>)</span>'),


})


//View for all clothes

var ClosetView = Backbone.View.extend({
  model: closetView,
  //closet.models.attributes

  el: $('.closet-lists'),

  initialize: function () {
    this.model.on('add', this.render, this);
  },
  
  render: function () {
    var self = this;
    this.$el.empty();
    _.each(this.model.toArray()), function(blog) {
      self.$el.append((new ClothingView({model: clothing})).render().$el)
    }
    //this.collection.forEach(this.renderClothing, this);
  },

  renderClothing: function(clothing) {
    var clothingView = new ClothingView ({model: clothing});
    this.$el.append(clothingView.render());
  } 

});

AppView = Backbone.View.extend({
  
  render: function() {
    new ClosetView({
      el: this.$('#closet'),
      collection: this.collection
    }).render();
  }

});


// var closetView = new ClosetView();

// closet.add({name: 'test'});

var closetView = new ClosetView();

$(document).ready(function(){
  $('.btn-add-clothing').click(() => {
    var clothing = new Clothing({
      name: $('.name-input').val(),
      type: $('.type-input').val(),
      mood: $('.mood-input').val(),
      weather: $('.weather-input').val()
    });

    closet.add(clothing);

  })
})





