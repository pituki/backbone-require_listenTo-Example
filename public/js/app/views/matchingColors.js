// View.js
// -------
define(["jquery", "backbone", "collections/colors", "text!templates/heading.html"],

	function ($, Backbone, Colors, template) {

		var View = Backbone.View.extend({

			// The DOM Element associated with this view
			el: ".example",

			// View constructor
			initialize: function () {

				// Calls the view's render method
				this.render();
				this.colors = new Colors();
				this.listenTo(this.colors, 'sync', this.renderColorList);
				this.colors.fetch({
//					success:function(d){
//						console.log("success");
//					}
				});

			},

			// View Event Handlers
			events: {
				"click .fetch1": "fetch1",
				"click .fetch2": "fetch2"
			},

			// Renders the view's template to the UI
			render: function () {

				// Setting the view's template property using the Underscore template method
				this.template = _.template(template, {});

				// Dynamically updates the UI with the view's template
				this.$el.html(this.template);
				this.$el.append("<div class='colorContainer'></div>");

				// Maintains chainability
				return this;

			},
			renderColorList: function (e) {
				console.log('new elements');
				console.log(e);
				var colors = "";
				e.each(function(el, i){
					colors += "<div class='color' style='background-color: "+el.get("value")+"'>"+el.get("color")+"</div>";
				});
				this.$el.find('.colorContainer').empty().append(colors);
			},
			fetch1:function(e){
				this.colors.fetch({url : '/rest/data'});
			},
			fetch2:function(e){
				this.colors.fetch({url : '/rest/data2'});
			}
		});

		// Returns the View class
		return View;

	}

);