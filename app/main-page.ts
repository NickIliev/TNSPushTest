import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as firebase from "nativescript-plugin-firebase";
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {




    console.log("navigatingTo");
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}