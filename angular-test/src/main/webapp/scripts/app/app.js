// Wrapping your JavaScript in a closure is a good habit.
(function() {
	var app = angular.module('angular-test', []);
	var pets = [
		{
			name: "Diego",
			price: 100,
			type: "Cat",
			description: "Blue Ragdoll",
			canPurchase: true,
			soldOut: true,
			image: 'assets/images/diego.jpg',
			reviews: [
	          {
	        	  stars: 5,
	        	  body: "Diego is awesome.",
	        	  author: "dj_clifford87@yahoo.com"
	          },
	          {
	        	  stars: 1,
	        	  body: "I hate this cat.",
	        	  author: "bobcarpenter@hater.com"
	          }
          	]
		},
		{
			name: "Milo",
			price: 50,
			type: "Cat",
			description: "Unknown",
			canPurchase: true,
			soldOut: true,
			image: 'assets/images/milo.jpg',
			reviews: [
	          {
	        	  stars: 1,
	        	  body: "Milo is mean.",
	        	  author: "dj_clifford87@yahoo.com"
	          },
	          {
	        	  stars: 5,
	        	  body: "He licks my nose.",
	        	  author: "bobcarpenter@hater.com"
	          }
          	]
		}
    ]


	app.controller('StoreController', function(){
		this.products = pets;

	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});


})();