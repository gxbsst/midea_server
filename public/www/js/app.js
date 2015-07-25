// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .value({
        Actions: {
            post: {method: 'POST'},
            add: {method: 'POST'},
            put: {method: 'PUT'},
            update: {method: 'PUT'},
            remove: {method: 'DELETE'}
        }
    })

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {

        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $ionicConfigProvider.backButton.previousTitleText(false);
        //$ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.backButton.text('').icon('').previousTitleText(false);
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'

            })

            .state('app.projects', {
                url: '/projects',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/projects.html',
                        controller: 'ProjectCtrl'
                    }
                }
            })

            .state('app.huihuos', {
                url: '/projects/:projectId/huihuos',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/huihuos.html',
                        controller: 'HuihuoCtrl'
                    }
                }
            })


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/projects');

    });
