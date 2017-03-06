/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7O0FBRUYsMkJBQXlCO0FBQ3pCLGlDQUFtQztBQUNuQyxvQ0FBc0M7QUFFdEMsdURBQXlEO0FBRXpELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDVix5QkFBeUIsRUFBRSxVQUFVLE9BQXlCO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxPQUFPLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLE9BQU8sQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUNyQyxzRUFBc0U7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFLLENBQUMsQ0FBQztRQUVuRCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELDJCQUEyQixZQUFDLEtBQUs7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUM7SUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUV2Qzs7O0VBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cblxuaW1wb3J0IFwiLi9idW5kbGUtY29uZmlnXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xuXG5maXJlYmFzZS5pbml0KHtcbiAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiBmdW5jdGlvbiAobWVzc2FnZTogZmlyZWJhc2UuTWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7bWVzc2FnZS50aXRsZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEJvZHk6ICR7bWVzc2FnZS5ib2R5fWApO1xuICAgICAgICAvLyBpZiB5b3VyIHNlcnZlciBwYXNzZWQgYSBjdXN0b20gcHJvcGVydHkgY2FsbGVkICdmb28nLCB0aGVuIGRvIHRoaXM6XG4gICAgICAgIGNvbnNvbGUubG9nKGBWYWx1ZSBvZiAnZm9vJzogJHttZXNzYWdlLmRhdGEuZm9vfWApO1xuXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJtc2cudGl0bGU6IFwiICsgbWVzc2FnZS50aXRsZSk7XG4gICAgfSxcbiAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2sodG9rZW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHb3QgdG9rZW5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW46IFwiICsgdG9rZW4pO1xuICAgIH1cbn0pLmNhdGNoKGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZSk7XG59KTtcblxuYXBwLnN0YXJ0KHsgbW9kdWxlTmFtZTogJ21haW4tcGFnZScgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG4iXX0=