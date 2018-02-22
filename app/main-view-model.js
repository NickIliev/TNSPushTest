"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_plugin_firebase_1 = require("nativescript-plugin-firebase");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.message = "...";
        _this.title = "...";
        nativescript_plugin_firebase_1.init().then(function () { console.log("Firebase INIT!!"); });
        nativescript_plugin_firebase_1.addOnMessageReceivedCallback(function (message) {
            console.log("body: " + message.body);
            console.log("title: " + message.title);
            _this.message = "Received: " + message.body;
            _this.title = message.title;
        });
        nativescript_plugin_firebase_1.addOnPushTokenReceivedCallback(function (token) {
            console.log("Firebase push token: " + token);
        });
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
                this.notifyPropertyChange('title', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDZFQUEySDtBQUUzSDtJQUFxQyxtQ0FBVTtJQUszQztRQUFBLFlBQ0ksaUJBQU8sU0FrQlY7UUFoQkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsbUNBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRXJELDJEQUE0QixDQUFDLFVBQUMsT0FBZ0I7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2QyxLQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILDZEQUE4QixDQUFDLFVBQUMsS0FBSztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFRCxzQkFBSSxvQ0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQVksS0FBYTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQy9DLENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVNELHNCQUFJLGtDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDN0MsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBUUwsc0JBQUM7QUFBRCxDQUFDLEFBL0NELENBQXFDLHVCQUFVLEdBK0M5QztBQS9DWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBhZGRPblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2ssIGFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2ssIGluaXQsIE1lc3NhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCIuLi5cIjtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCIuLi5cIjtcclxuXHJcbiAgICAgICAgaW5pdCgpLnRoZW4oKCkgPT4geyBjb25zb2xlLmxvZyhcIkZpcmViYXNlIElOSVQhIVwiKSB9KVxyXG5cclxuICAgICAgICBhZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9keTogXCIgKyBtZXNzYWdlLmJvZHkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpdGxlOiBcIiArIG1lc3NhZ2UudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJSZWNlaXZlZDogXCIgKyBtZXNzYWdlLmJvZHk7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBtZXNzYWdlLnRpdGxlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRPblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2soKHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21lc3NhZ2UgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbWVzc2FnZScsIHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RpdGxlJywgdmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19