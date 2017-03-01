// script.js

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);


scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/example', {
            templateUrl : 'pages/example.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});


scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.task = []
    $scope.addTask = function(){
      var newId = $scope.task.length;
      newId++;
      $scope.task.push(
        {id: newId, toDo: $scope.addToDo}
      )
            $scope.textInp.placeholder = '';
    }
});
