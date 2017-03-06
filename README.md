How to use nativescript-plugin-firebase to send push notifications (Cloud Messaging)

POC application using NativeScrit 2.5 and nativescript-plugin-firebase

- create your app with the desired name
`tns create TNSPushTest --tsc`

- add the provision profile needed
`tns run ios --provision <Your-Provision-Profile-Name>`

> Note: when changing `platforms` folder, you will need to explicitly set your provision profile again.

- add the plugin and during the installation choose **y** when asked if you want to use Cloud Messaging (push notifications)
`tns plugin add nativescript-plugin-firebase`

- place your `GoogleService-info.plist` file (generated from firebase console) in `app/App_Resources/iOS`

- in the same directory create file called `<Your-App-Name>.entitlements` and the following

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>aps-environment</key>
    <string>development</string>
</dict>
</plist>
```

- in the same directory locate your info.plist file and add the following
```
<key>UIBackgroundModes</key>
<array>
	<string>remote-notification</string>
</array>
```

- in your firebase console add the created certificate for push notifications in iOS (see `app/images/push-certificate.png` for details)

- when creating new notoficiation for iOS do not forget to set title, label and again title in advanced options

- follow [these instructions](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md) to enable firebase notifications in your app logic
 
 app.ts
 ```
 import * as firebase from "nativescript-plugin-firebase";

firebase.init({
    onMessageReceivedCallback: function (message: firebase.Message) {
        console.log(`Title: ${message.title}`);
        console.log(`Body: ${message.body}`);
        // if your server passed a custom property called 'foo', then do this:
        console.log(`Value of 'foo': ${message.data.foo}`);

        dialogs.alert("msg.title: " + message.title);
    },
    onPushTokenReceivedCallback(token) {
        console.log("Got token");
        console.log("token: " + token);
    }
}).catch(e => {
    console.log("Error: " + e);
});

 ```