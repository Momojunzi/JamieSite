/**
 * Created by Mark on 1/5/2017.
 */
(function() {
    angular.module('headerModule', [])
        .directive('headerDirective', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'templates/header.html',
                controller: (function($scope) {
                    $scope.linklist = linksList;
                    var menuButton = document.getElementById('menu-button');
                    var mobileNav = document.getElementById('mobile-nav-link-container');
                    var buttonSymbol = document.getElementById('button-symbol');
                    var navMoving = true;
                    var navDisplayed = false;
                    var menuMargin = -51;
                    function displayMobileMenu(){
                        if(navMoving == true) {
                            menuMargin += 3;
                            mobileNav.style.marginLeft = menuMargin + 'vw';
                            buttonSymbol.className = 'fa fa-times';
                            requestAnimationFrame(displayMobileMenu);
                        }
                        if(menuMargin >= 1){
                            navMoving = false;
                            navDisplayed = true;
                        }
                    }
                    function hideMobileMenu(){
                        if(navMoving == false){
                            menuMargin -= 3;
                            mobileNav.style.marginLeft = menuMargin + 'vw';
                            buttonSymbol.className = 'fa fa-bars';
                            requestAnimationFrame(hideMobileMenu);
                        }
                        if(menuMargin <= -51){
                            navMoving = true;
                            navDisplayed = false;
                        }
                    }
                    menuButton.addEventListener('click', function(){

                        if(navDisplayed == false){
                            requestAnimationFrame(displayMobileMenu);
                        }
                        else{
                            requestAnimationFrame(hideMobileMenu);
                        }
                    });
                    mobileNav.addEventListener('click', function(){
                        if(navDisplayed == true){
                            requestAnimationFrame(hideMobileMenu);
                        }
                    });
               })
            }
        });
    var linksList = [
        {
            name: 'Home',
            url: '#/'
        },
        {
            name: 'Classes',
            url: '#classes'
        },
        {
            name: 'About',
            url: '#about'
        },
        {
            name: 'appointments',
            url: '#contact'
        }
    ]
    
})();