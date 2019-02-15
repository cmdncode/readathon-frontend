var myApp = angular.module('myApp',['ngRoute']);


myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'BooksController',
    templateUrl: 'index.html'
  })
});