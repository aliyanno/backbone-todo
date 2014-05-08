
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
        <input class="task-check" type="checkbox" /> \
        <%= task %> \
      </li> '
    ),

    events: {
      'click input#submit': 'addTask',
      'click input.task-check': 'toggleTask',
      'click input#remove-complete': 'removeCompleted'
    },

    models: {
      newTask: "First task of the day"
    },

    initialize: function () {
      // _.bindAll(this, 'render', 'addTask');
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

    toggleTask: function (event) {
      // event.currentTarget.parent gets the specific li for a task
      $(event.currentTarget).parent().toggleClass('completed');
    },

    removeCompleted: function () {
      $('li.completed').hide();
    }

  });

  var appContent = new AppBody();

})(jQuery);
