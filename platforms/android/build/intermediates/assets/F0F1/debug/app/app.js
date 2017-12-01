"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
require("./bundle-config");
var app = require("application");
var dialogs = require("ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    onMessageReceivedCallback: function (message) {
        console.log("Title: " + message.title);
        console.log("Body: " + message.body);
        // if your server passed a custom property called 'foo', then do this:
        console.log("Value of 'foo': " + message.data.foo);
        dialogs.alert("msg.title: " + message.title);
    },
    onPushTokenReceivedCallback: function (token) {
        console.log("Got token");
        console.log("token: " + token);
    }
}).catch(function (e) {
    console.log("Error: " + e);
});
app.start({ moduleName: 'main-page' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLDJCQUF5QjtBQUN6QixpQ0FBbUM7QUFDbkMsb0NBQXNDO0FBRXRDLHVEQUF5RDtBQUV6RCxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ1YseUJBQXlCLEVBQUUsVUFBVSxPQUF5QjtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsT0FBTyxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDckMsc0VBQXNFO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBSyxDQUFDLENBQUM7UUFFbkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCwyQkFBMkIsWUFBQyxLQUFLO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDO0lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFFdkM7OztFQUdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC50cyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cbiovXG5cbmltcG9ydCBcIi4vYnVuZGxlLWNvbmZpZ1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcblxuZmlyZWJhc2UuaW5pdCh7XG4gICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24gKG1lc3NhZ2U6IGZpcmViYXNlLk1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFRpdGxlOiAke21lc3NhZ2UudGl0bGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBCb2R5OiAke21lc3NhZ2UuYm9keX1gKTtcbiAgICAgICAgLy8gaWYgeW91ciBzZXJ2ZXIgcGFzc2VkIGEgY3VzdG9tIHByb3BlcnR5IGNhbGxlZCAnZm9vJywgdGhlbiBkbyB0aGlzOlxuICAgICAgICBjb25zb2xlLmxvZyhgVmFsdWUgb2YgJ2Zvbyc6ICR7bWVzc2FnZS5kYXRhLmZvb31gKTtcblxuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwibXNnLnRpdGxlOiBcIiArIG1lc3NhZ2UudGl0bGUpO1xuICAgIH0sXG4gICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrKHRva2VuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IHRva2VuXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOiBcIiArIHRva2VuKTtcbiAgICB9XG59KS5jYXRjaChlID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUpO1xufSk7XG5cbmFwcC5zdGFydCh7IG1vZHVsZU5hbWU6ICdtYWluLXBhZ2UnIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIl19