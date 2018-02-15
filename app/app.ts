import "./bundle-config";
import * as app from 'application';
import * as dialogs from "ui/dialogs";
require("nativescript-plugin-firebase"); // important to receive notifications in Background on iOS!

// moved initialization of Firebase in main-view-model.ts

app.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
