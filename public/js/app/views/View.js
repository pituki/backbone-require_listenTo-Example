// View.js
// -------
define(["jquery", "backbone", "text!templates/heading.html", 'views/colors', 'views/matchingColors'],

	function ($, Backbone, template , ColorsView, MatchingColorsViewolorsView) {

		var View = Backbone.View.extend({

			// The DOM Element associated with this view
			el: ".main",

			// View constructor
			initialize: function () {

				// Calls the view's render method
				this.render();


			},
			// Renders the view's template to the UI
			render: function () {

				this.$el.append("<div class='half colors'></div><div class='half matchingColors'></div>");
				this.$el.find('.colors').append(new ColorsView().$el );
				this.$el.find('.matchingColors').append(new MatchingColorsViewolorsView().$el );

				// Maintains chainability
				return this;

			}
		});

		// Returns the View class
		return View;

	}

);