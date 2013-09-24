// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "models/Model", "views/View", "views/matchingColors"],

    function($, Backbone, Model, View, MatchingColorsView) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
	            "": "index",
	            "colors": "colors"

            },

	        index: function() {

		        // Instantiates a new view which will render the header text to the page
		        new View();

	        },
	        colors: function() {

		        // Instantiates a new view which will render the header text to the page
		        new MatchingColorsView();

	        }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);