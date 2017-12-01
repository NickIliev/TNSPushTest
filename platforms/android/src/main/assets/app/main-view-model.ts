import { Observable } from 'data/observable';
import { addOnMessageReceivedCallback } from "nativescript-plugin-firebase";

export class HelloWorldModel extends Observable {

    private _message: string;
    private _title: string;

    constructor() {
        super();

        this.message = "...";
        this.title = "...";

        addOnMessageReceivedCallback((message) => {
            this.message = "Received: " + message.body;
            this.title = message.title;
        });
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
            this.notifyPropertyChange('title', value)
        }
    }
}