
(function ($) {
  "use strict";

  // Controller for the header
  var AppHead = Backbone.View.extend({
    el: $('#task-header'), // Attaches the body to the backbone view

    // make dat date purrty gurrrl

    initialize: function () {
      _.bindAll(this, 'render');
      this.render();
    },

    render: function () {
      $(this.el).append('<h3 class="inline-header right">' + new Date + '</h3>');
      return this;
    },

  });

  var appHeader = new AppHead();

  // Controller for the task container
  var AppBody = Backbone.View.extend({
    el: $('#task-container'),
    taskList: $('ul#task-list'),

    // extract templates into own file
    taskTemplate: _.template( ' \
      <li> \
        <input class="task-complete" type="checkbox" /> \
        <%= task %> \
      </li> '
    ),

    events: {
      'click input#submit': 'addTask',
      // select task selector, remove task
    },

    models: {
      newTask: "Feed the birds"
    },

    initialize: function () {
      _.bindAll(this, 'render', 'addTask');
      this.render();
    },

    render: function () {
      $(this.taskList).append(this.taskTemplate({ task: this.models.newTask }));
      return this;
    },

    addTask: function () {
      this.models.newTask = $('input#new-task').val();
      this.render();
      $('input#new-task').val(null); // resets the value of input box
    },

    // completeTask: function () {
    //   console.log(this);
    //   this.parent().addClass('completed');
    // }

  });

  var appContent = new AppBody();

})(jQuery);
