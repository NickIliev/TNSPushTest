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
        console.log(`Title: ${message.title}`);
        console.log(`Body: ${message.body}`);
        // if your server passed a custom property called 'foo', then do this:
        console.log(`Value of 'foo': ${message.data.foo}`);
    }
});
app.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
