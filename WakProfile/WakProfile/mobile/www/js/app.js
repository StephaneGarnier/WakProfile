angular.module('starter', ['ionic', 'wakanda'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'profileController'
    });
    $urlRouterProvider.otherwise('/profile');
});