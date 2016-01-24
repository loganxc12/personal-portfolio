angular.module('dm8', []);

angular.module('dm8').controller('mainCtrl', function($scope){
    $scope.test = "Sorry Steve!";
});

//var foreman = angular.module('dm8', [])

//Module: like "foreman"; a worker who supervises and directs other workers.

/*foreman.controller("mainCtrl", 
function($scope) {
    $scope.test = "Sorry Steve!";
});

//$scope: communicates between controller and html. Callback that angular can call when it needs to.