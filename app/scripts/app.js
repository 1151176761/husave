'use strict';

/**
 * @ngdoc overview
 * @name 1511App
 * @description
 * # 1511App
 *
 * Main module of the application.
 */
angular
  .module('1511App', ["ui.router"]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
    $stateProvider.state("a",{
      url:"/a",
      templateUrl: "views/a.html",
      controller: "a"
    }).state("b",{
      url:"/b",
      templateUrl:"views/b.html",
      controller:"b"
    })
  }])
