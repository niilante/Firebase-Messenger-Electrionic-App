var app = angular.module('starter');

app.controller('MessagesController', function ($scope, $state, Account, Messages) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            Account.setUser(user);
            $scope.messages = Messages.readMessages(Account.getUser().uid).messages;
            console.log($scope.messages);
        }
    });

    $scope.onPersonClicked = function(userMessage) {
        Messages.setMessage(userMessage);
        $state.go('user');
        // Go to new state
        // Pass person name to that state
    }


    $scope.signOut = function () {
        firebase.auth().signOut().then(function () {
            $state.go('login');
        }).catch(function (error) {
            console.log(error.message);
        });
    }

});