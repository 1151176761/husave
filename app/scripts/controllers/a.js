angular.module('1511App').controller('a',["$scope","$http", function ($scope,$http) {
  $http({
    method:'get',
    url:'http://www.somenote.cn:1602/list2'
  }).success(function(e){
    $scope.a=e;
  })
}]);
