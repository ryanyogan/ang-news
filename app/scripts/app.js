/* global app:true */
'use strict';

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]).constant('FIREBASE_URL', 'https://digg.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/posts.html',
    controller: 'PostsCtrl'
  });
});
