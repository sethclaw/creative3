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
            controller  : 'exampleController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Welcome to our single page application! Feel free to have a look around.' + 
    				'This is the home page but we also have a short about section and a short Angular.js example.' +
    				'Notice how the whole page does not while clicking between tabs.';
});
scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'As you can see, the content on the website changes when you click the links '+
    					'but the page does not reload. This is because we are using the AngularJS Route module.' +
    					'This type of page is called a Single Page Application. Check out our AngularJS Example to-do list!';
});

scotchApp.controller('exampleController', function($scope) {
    $scope.task = [{id: 0, toDo:'Burn Homework', done:false}];
    $scope.addTask = function(){
      var newId = $scope.task.length;
      newId++;
      $scope.task.push(
        {id: newId, toDo: $scope.addToDo, done:false}
      )
    }
    $scope.remove = function() {
      var oldList = $scope.task;
      $scope.task = [];
      angular.forEach(oldList, function(x) {
          if (!x.done) $scope.task.push(x);
      });
    };
});
