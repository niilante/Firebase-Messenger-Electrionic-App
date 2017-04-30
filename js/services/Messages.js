var app = angular.module('starter');

app.service('Messages', function () {

    var messages = {
        "user": {
            "pSRxx2dciCNoeG11nprFFiXH44W2": {
                "messages": [
                    {
                        "user": "Test Dummy",
                        "messages": [
                            {
                                "date": "04/28/2017",
                                "time": "12:47AM",
                                "action": "received",
                                "message": "Hello World"
                            },
                            {
                                "date": "05/1/2017",
                                "time": "01:51PM",
                                "action": "sent",
                                "message": "This is a test"
                            }
                        ]
                    },
                    {
                        "user": "Test Dummy 2",
                        "messages": [
                            {
                                "date": "04/21/2017",
                                "time": "11:22AM",
                                "action": "received",
                                "message": "Cool App"
                            }
                        ]
                    }
                ]
            }
        }
    }

    var message = null;

    return {
            readMessages: function (userId) {
                return messages.user[userId];
            },
            getMessage: function() {
                return message;
            },
            setMessage: function(newMessage) {
                message = newMessage;
            },
            sendMessage: function(newMessage){
                console.log(newMessage);
                message.messages.push(newMessage);
            }
        };

    });
