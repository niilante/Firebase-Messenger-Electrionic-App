var app = angular.module('starter');

app.service('Account', function() {
    var currentUser = null;
    return {
        getUser: function() {
            return currentUser;
        },
        setUser: function(user){
            currentUser = user;
        }
    };
});