export default Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar: _.random(1, 15) + '.jpg'
  },

  initialize: function() {
    this.set('avatar', _.random(1, 15) + '.jpg');
  }
});
