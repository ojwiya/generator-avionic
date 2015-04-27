(function () {
  'use strict';
  /**
   * @ngdoc constant
   * @name <%= ngModulName %>.ROUTES
   * @description
   * # ROUTES
   * Defines UI-Router states and their associated URL routes and views.
   * Is used inside /services/ApiService.js to generate correct endpoint dynamically
   */

   var <%= ngModulName %> = angular.module('<%= ngModulName %>');

   <%= ngModulName %>.config(function($httpProvider, $stateProvider, $urlRouterProvider) {

      // Turn off caching (Please add $ionicConfigProvider to the app.config options)
      // $ionicConfigProvider.views.maxCache(0);

      /*
      // Turn off back button text (Please add $ionicConfigProvider to the app.config options)
      $ionicConfigProvider.backButton.previousTitleText(false);
      */

       // Application routing
       $stateProvider
         .state('app', {
           url: '/app',
           abstract: true,
           templateUrl: 'templates/main.html',
           controller: 'MainController'
         })
         .state('app.home', {
           url: '/home',
           cache: true,
           views: {
             'viewContent': {
               templateUrl: 'templates/views/home.html',
               controller: 'HomeController'
             }
           }
         })
         .state('app.products',{
            url:'/products',
            cache: true,
            views: {
              'viewContent': {
                templateUrl:'templates/views/products.html',
                controller:'ProductsController'
             }
           }
         })

         .state('app.product',{
            url:'/product/:id',
            cache: true,
            views: {
              'viewContent': {
                controller:'ProductController',
                templateUrl:'templates/views/product.html'
             }
           }
         })

         .state('app.product.new',{
             url:'/product/new',
             views: {
               'viewContent': {
                 controller:'ProductCreationController',
                 templateUrl:'templates/views/new-product.html'
               }
             }
           })

         .state('app.product.edit',{
             url:'/product/edit/:id',
             views: {
               'viewContent': {
                   controller:'ProductEditController',
                   templateUrl:'templates/views/edit-product.html'
                 }
               }
             })
         .state('app.settings', {
           url: '/settings',
           cache: true,
           views: {
             'viewContent': {
               templateUrl: 'templates/views/settings.html',
               controller: 'SettingsController'
             }
           }
         });


       // redirects to default route for undefined routes
       $urlRouterProvider.otherwise('/app/home');
     });


})();
