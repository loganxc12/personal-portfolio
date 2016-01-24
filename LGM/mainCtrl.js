app.controller('mainCtrl', function($scope) {
    
    $scope.timeline = false;
    $scope.toggleTimeline = function() {
        $scope.timeline = !$scope.timeline;
    }
    $scope.menu = false;
    $scope.toggleMenu = function() {
        $scope.menu = !$scope.menu;
    }
    
})