var app = angular.module('personalSite', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'mainCtrl'
        })
        .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'mainCtrl'
        })
        .state('work', {
                url: '/work',
                templateUrl: 'views/work.html',
                controller: 'mainCtrl'
        })
        .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'mainCtrl'
        })
})

$(document).ready(function(){
    resizeDiv();
});

$( window ).load(function(){
    resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $('.t-timeline').css({'height': vph + 'px'});
}
