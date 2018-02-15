/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as app from 'application';
import * as dialogs from "ui/dialogs";

import * as firebase from "nativescript-plugin-firebase";

firebase.init({   
    onMessageReceivedCallback: (message: firebase.Message) => {
        console.log("onMessageReceivedCallback");

        console.log(`Title: ${message.title}`);
        console.log(`Body: ${message.body}`);
        // if your server passed a custom property called 'foo', then do this:
        console.log(`Value of 'foo': ${message.data.foo}`);
    },

    onPushTokenReceivedCallback: (token: any) => {
        console.log("onPushTokenReceivedCallback");

        console.log("Firebase push token: " + token);
    }
}).then(() => {
    console.log("firebase init");
})

// import * as pushPlugin from "nativescript-push-notifications";

// var settings = {
//     senderID: "",
//     badge: true,
//     sound: true,
//     alert: true,
//     interactiveSettings: {
//         actions: [{
//             identifier: 'READ_IDENTIFIER',
//             title: 'Read',
//             activationMode: "foreground",
//             destructive: false,
//             authenticationRequired: true
//         }, {
//         identifier: 'CANCEL_IDENTIFIER',
//             title: 'Cancel',
//             activationMode: "foreground",
//             destructive: true,
//             authenticationRequired: true
//         }],
//         categories: [{
//             identifier: 'READ_CATEGORY',
//             actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
//             actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
//         }]
//     },
//     notificationCallbackIOS: (message) => {
//         console.dir(message);
//     }
// };

// pushPlugin.register(settings,
//     // Success callback
//     function(token){
//         // Register the interactive settings
//         if(settings.interactiveSettings) {
//             pushPlugin.registerUserNotificationSettings(() => {
//                 console.log('Successfully registered for interactive push.');
//             },(err) => {
//                 console.log('Error registering for interactive push: ' + JSON.stringify(err));
//             });
//         }
//     }, (error) => {
//         console.log(error);
//     }
// );

app.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
