
(function ($) {
  "use strict";

  // Controller for the body view
  var AppView = Backbone.View.extend({
    el: $('body'), // Attaches the body to the backbone view

    initialize: function () {
      _.bindAll(this, 'render', 'addValue');
      this.render();
    },

    render: function () {
      $(this.el).html("<h3>To Do App</h3>");
      return this;
    },

  });

  var appView = new AppView();

})(jQuery);
