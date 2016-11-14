angular.module('1511App').controller('b',["$scope","$http", function ($scope,$http) {
  $http({
    method:'get',
    url:'http://www.somenote.cn:1602/list1'
  }).success(function(e){
    $scope.b=e;
  })
}]);
