/**
 * Created by Mark on 1/5/2017.
 */

(function(){
   angular.module('ceuApp', ['ngRoute','headerModule'])
       .config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "templates/home.html"
                })
                .when("/about", {
                    templateUrl: "templates/about.html"
                })
                .when("/classes", {
                    templateUrl: "templates/classes.html"
                })
                .when("/contact", {
                    templateUrl: "templates/contact.html"
                });
        });
})();

