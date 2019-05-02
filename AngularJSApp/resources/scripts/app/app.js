var app = angular.module('AngularWorkshop',['ngRoute','ngResource']);

var translation = null;

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/People', { templateUrl: 'resources/scripts/app/templates/People.html' }).
        otherwise({ redirectTo: '/People' });
}]);