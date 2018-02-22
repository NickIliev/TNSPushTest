# Push Notification in your NativeScript application

Requirments:
- NativeScript 3.x.x and above
- `nativescript-plugin-firebase`
- Firebase console account
- On iOS we would need **APNS certificate** and the corresponding provisioning profile for our application.

This POC application will demonstrate how to use [`nativescript-plugin-firebase`](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md) to send push notifications (Firebase Cloud Messaging) on both iOS and Android. We will use the FCM REST API to send notificaitions using [Postman](https://www.getpostman.com/)

* [Create application](#create-application)
* [iOS](#ios)
* [Android](#android)
* [Firebase Console](#firebase-console)
* [Push notifications with Postman](#push-notifications-with-postman)


## Create application

POC application using NativeScrit 3.X.X and above and `nativescript-plugin-firebase`

- Create your app with the desired name
`tns create TNSPushTest --tsc`

- Sigh with the provision profile
`tns run ios --provision <Your-Provision-Profile-Name>`

- Add the plugin and during the installation choose **y** when asked if you want to use Cloud Messaging (push notifications)
`npm i nativescript-plugin-firebase --save`

## iOS

- Place your `GoogleService-info.plist` file (generated from Firebase console) in `app/App_Resources/iOS`.
In `app/App_Resources/iOS` create a file called `<Your-App-Name>.entitlements` and the following:

Example `app/App_Resources/iOS/TNSPushTest.entitlements`
```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>aps-environment</key>
    <string>development</string>
</dict>
</plist>
```

- In `app/App_Resources/iOS` locate your `Info.plist` file and add the following
```XML
<key>UIBackgroundModes</key>
<array>
	<string>remote-notification</string>
</array>
```

- In `app/App_Resources/iOS` add the entitlments file to `build.xcconfig` using the app name and the entitlments file name.

```JS
CODE_SIGN_ENTITLEMENTS = TNSPushTest/Resources/TNSPushTest.entitlements;
```

> Note: On iOS background notifications can be received on real device only.

## Android

- Place your `google-services.json` file (generated from Firebase console) in `app/App_Resources/Android`

In `app/App_Resources/Android` add the following in the `AndroidManifest.xml`file within the `<application>` tag
```XML
    <service android:name="org.nativescript.plugins.firebase.MyFirebaseInstanceIDService">
        <intent-filter>
            <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
        </intent-filter>
    </service>
    <service android:name="org.nativescript.plugins.firebase.MyFirebaseMessagingService">
        <intent-filter>
            <action android:name="com.google.firebase.MESSAGING_EVENT"/>
        </intent-filter>
    </service>

```

## Firebase Console
- From [Firebase console](https://console.firebase.google.com/) download `GoogleService-Info.plist` for iOS and place it in `app/App_Resources/iOS/`
- From [Firebase console](https://console.firebase.google.com/) download `google-services.json` for Android and place it in `app/App_Resources/Android/`
- In your [Firebase console](https://console.firebase.google.com/) add the created certificate for push notifications in iOS (see `app/images/push-certificate.png` for details)
 
 `app.ts`
 ```TypeScript
require("nativescript-plugin-firebase"); // Important:Use require and do not use import as TypeScript qill remove unused imports

// init the firebase after the application has strted

 ```

 main-page.ts
 ```TypeScript
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
 
- Full instructions on how to get token, send to topic and IDs can be found [here]](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/MESSAGING.md)

> Additonal Note: After the project is build, open the native project (platforms/ios/<your-app-name>.xcodeproj) in Xcode and make sure that in the Capabilities tab you had your Push Notifications enabled (ON) 

# Push notifications with Postman

Instead of using Firebase Console (which in some cases causes unexpected results due to different and not fully controled message payload) we can test our push notifications via [Postman](https://www.getpostman.com/).

- Install and open Postman

- Select `POST`

- Use `https://fcm.googleapis.com/fcm/send` as request URL

- Add the following `Headers`
```
Key                     Value
-----------------------------------
Authorization           key=<legacy_server_key_here>
Content-Type            application/json
```

- Select `Body` > `raw` > `JSON (application/json)` and the following:

To send to specific device using FCM Token (The token can be obrtained via `onPushTokenReceivedCallback`)
```JSON
{
 "to" : "YOUR_FCM_TOKEN_WILL_BE_HERE",
 "collapse_key" : "type_a",
 "notification" : {
     "body" : "First Notification",
     "title": "Collapsing A"
 },
 "data" : {
     "body" : "First Notification",
     "title": "Collapsing A",
     "key_1" : "Data for key one",
     "key_2" : "Hellowww"
 }
}
```

Sending to multiple devices using multiple FCM device tokens can be achieved with `registration_ids`. We are pasing a JSON array of device ID tokens
```JSON
{
 "registration_ids" : [
 "FIRST_FCM_TOKEN_WILL_BE_HERE",	
 "SECOND_FCM_TOKEN_WILL_BE_HERE",
 "THIRD_FCM_TOKEN_WILL_BE_HERE",
 ],
 "collapse_key" : "type_a",
 "notification" : {
     "body" : "Forth Notification",
     "title": "Collapsing EEE"
 },
 "data" : {
     "body" : "Forth Body",
     "title": "Collapsing A",
     "key_1" : "Data for key one",
     "key_2" : "Hellowww"
 }
}
```

> Note: Sending to User Segment is not possible via FCM Rest APi (meaning we can't send to all users via HTTP requests).
The REST API provides possibilities to send only via FCM tokent (using `to` and `registration_ids`) or sending to devices registered to `topic`.

Cudos to [Pratic Butani and his blog post](https://medium.com/android-school/test-fcm-notification-with-postman-f91ba08aacc3).
