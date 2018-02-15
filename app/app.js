"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
require("./bundle-config");
var app = require("application");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    onMessageReceivedCallback: function (message) {
        console.log("onMessageReceivedCallback");
        console.log("Title: " + message.title);
        console.log("Body: " + message.body);
        // if your server passed a custom property called 'foo', then do this:
        console.log("Value of 'foo': " + message.data.foo);
    },
    onPushTokenReceivedCallback: function (token) {
        console.log("onPushTokenReceivedCallback");
        console.log("Firebase push token: " + token);
    }
}).then(function () {
    console.log("firebase init");
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLDJCQUF5QjtBQUN6QixpQ0FBbUM7QUFHbkMsdURBQXlEO0FBRXpELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDVix5QkFBeUIsRUFBRSxVQUFDLE9BQXlCO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsT0FBTyxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDckMsc0VBQXNFO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDJCQUEyQixFQUFFLFVBQUMsS0FBVTtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLENBQUE7QUFFRixpRUFBaUU7QUFFakUsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0Isc0JBQXNCO0FBQ3RCLDZDQUE2QztBQUM3Qyw2QkFBNkI7QUFDN0IsNENBQTRDO0FBQzVDLGtDQUFrQztBQUNsQywyQ0FBMkM7QUFDM0MsZUFBZTtBQUNmLDJDQUEyQztBQUMzQywrQkFBK0I7QUFDL0IsNENBQTRDO0FBQzVDLGlDQUFpQztBQUNqQywyQ0FBMkM7QUFDM0MsY0FBYztBQUNkLHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msa0ZBQWtGO0FBQ2xGLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2IsU0FBUztBQUNULDhDQUE4QztBQUM5QyxnQ0FBZ0M7QUFDaEMsUUFBUTtBQUNSLEtBQUs7QUFFTCxnQ0FBZ0M7QUFDaEMsMEJBQTBCO0FBQzFCLHVCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLGtFQUFrRTtBQUNsRSxnRkFBZ0Y7QUFDaEYsMkJBQTJCO0FBQzNCLGlHQUFpRztBQUNqRyxrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsUUFBUTtBQUNSLEtBQUs7QUFFTCxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFFdkM7OztFQUdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC50cyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cbiovXG5cbmltcG9ydCBcIi4vYnVuZGxlLWNvbmZpZ1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcblxuZmlyZWJhc2UuaW5pdCh7ICAgXG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2U6IGZpcmViYXNlLk1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaXRsZTogJHttZXNzYWdlLnRpdGxlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQm9keTogJHttZXNzYWdlLmJvZHl9YCk7XG4gICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ2ZvbycsIHRoZW4gZG8gdGhpczpcbiAgICAgICAgY29uc29sZS5sb2coYFZhbHVlIG9mICdmb28nOiAke21lc3NhZ2UuZGF0YS5mb299YCk7XG4gICAgfSxcblxuICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogKHRva2VuOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2tcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICB9XG59KS50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlIGluaXRcIik7XG59KVxuXG4vLyBpbXBvcnQgKiBhcyBwdXNoUGx1Z2luIGZyb20gXCJuYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zXCI7XG5cbi8vIHZhciBzZXR0aW5ncyA9IHtcbi8vICAgICBzZW5kZXJJRDogXCJcIixcbi8vICAgICBiYWRnZTogdHJ1ZSxcbi8vICAgICBzb3VuZDogdHJ1ZSxcbi8vICAgICBhbGVydDogdHJ1ZSxcbi8vICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XG4vLyAgICAgICAgIGFjdGlvbnM6IFt7XG4vLyAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9JREVOVElGSUVSJyxcbi8vICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXG4vLyAgICAgICAgICAgICBhY3RpdmF0aW9uTW9kZTogXCJmb3JlZ3JvdW5kXCIsXG4vLyAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogZmFsc2UsXG4vLyAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXG4vLyAgICAgICAgIH0sIHtcbi8vICAgICAgICAgaWRlbnRpZmllcjogJ0NBTkNFTF9JREVOVElGSUVSJyxcbi8vICAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsJyxcbi8vICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbi8vICAgICAgICAgICAgIGRlc3RydWN0aXZlOiB0cnVlLFxuLy8gICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxuLy8gICAgICAgICB9XSxcbi8vICAgICAgICAgY2F0ZWdvcmllczogW3tcbi8vICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0NBVEVHT1JZJyxcbi8vICAgICAgICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcbi8vICAgICAgICAgICAgIGFjdGlvbnNGb3JNaW5pbWFsQ29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXVxuLy8gICAgICAgICB9XVxuLy8gICAgIH0sXG4vLyAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IChtZXNzYWdlKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUuZGlyKG1lc3NhZ2UpO1xuLy8gICAgIH1cbi8vIH07XG5cbi8vIHB1c2hQbHVnaW4ucmVnaXN0ZXIoc2V0dGluZ3MsXG4vLyAgICAgLy8gU3VjY2VzcyBjYWxsYmFja1xuLy8gICAgIGZ1bmN0aW9uKHRva2VuKXtcbi8vICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIGludGVyYWN0aXZlIHNldHRpbmdzXG4vLyAgICAgICAgIGlmKHNldHRpbmdzLmludGVyYWN0aXZlU2V0dGluZ3MpIHtcbi8vICAgICAgICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXJVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgaW50ZXJhY3RpdmUgcHVzaC4nKTtcbi8vICAgICAgICAgICAgIH0sKGVycikgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWdpc3RlcmluZyBmb3IgaW50ZXJhY3RpdmUgcHVzaDogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9LCAoZXJyb3IpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgIH1cbi8vICk7XG5cbmFwcC5zdGFydCh7IG1vZHVsZU5hbWU6ICdtYWluLXBhZ2UnIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIl19