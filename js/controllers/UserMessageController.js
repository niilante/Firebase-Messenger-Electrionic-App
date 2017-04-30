var app = angular.module('starter');

var date = new Date();

app.controller('UserMessageController', function ($scope, $state, Messages) {
    $scope.info = Messages.getMessage();

    $scope.messages = Messages.getMessage().messages;
    console.log($scope.messages);

    $scope.data = {};

    $scope.sendMessage = function () {
        var temp = {
            "date": date.getMonth() + "//" + date.getDate() + "//" + date.getFullYear(),
            "time": date.getHours() + ":" +date.getMinutes(),
            "action": "sent",
            "message": $scope.data.model
        }
        Messages.sendMessage(temp);
    }

    $scope.signOut = function () {
        firebase.auth().signOut().then(function () {
            $state.go('login');
        }).catch(function (error) {
            console.log(error.message);
        });
    }
});
