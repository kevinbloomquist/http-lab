angular.module('Criminals',[])
	.controller("CriminalsController",CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
	var self = this;
	self.all = [];
	self.getCriminals = getCriminals;
	self.addCriminal = addCriminal;
	// self.addCriminal = addCriminal;
	// self.newCriminal = {};
	// self.deleteCriminal = deleteCriminal;

	function getCriminals() {
		$http
		.get('http://localhost:3000/criminals')
		.then(function (response){
			self.all = response.data.criminals;
		});
	}
		getCriminals();

	function addCriminal(){
		$http
		.post('http://localhost:3000/criminals',self.newCriminal)
		.then(function(response){
			console.log(response.data);
			getCriminals();
		});
		self.newCriminal = {};
	}

	function deleteCriminal(){
		
	}
}