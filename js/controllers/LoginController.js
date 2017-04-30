var app = angular.module('starter');

app.controller('LoginController', function ($scope, $state, $ionicPopup, Account) {

    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            $state.go('messages');
        }
    })

    $scope.signUp = function () {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            $ionicPopup.show({
                title: 'Success',
                subTitle: 'You successfully registered!',
                scope: $scope,
                buttons: [
                    { text: 'Awesome Sauce' },
                ]
            });
        }).catch(function (error) {
            console.log(error.message);
        });
    }

    $scope.signIn = function () {

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            Account.setUser(firebase.auth().currentUser);
        }).catch(function (error) {
            console.log(error.message);
        });
    }

});