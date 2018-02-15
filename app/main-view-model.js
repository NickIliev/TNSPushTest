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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDZFQUEyRjtBQUUzRjtJQUFxQyxtQ0FBVTtJQUszQztRQUFBLFlBQ0ksaUJBQU8sU0FjVjtRQVpHLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLG1DQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtRQUVwRCwyREFBNEIsQ0FBQyxVQUFDLE9BQWdCO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMzQyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVELHNCQUFJLG9DQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxLQUFhO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDL0MsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBU0Qsc0JBQUksa0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUM3QyxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFRTCxzQkFBQztBQUFELENBQUMsQUEzQ0QsQ0FBcUMsdUJBQVUsR0EyQzlDO0FBM0NZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpbml0LCBhZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrLCBNZXNzYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIi4uLlwiO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCIuLi5cIjtcblxuICAgICAgICBpbml0KCkudGhlbigoKSA9PiB7IGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgSU5JVCEhXCIpfSlcblxuICAgICAgICBhZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvZHk6IFwiICsgbWVzc2FnZS5ib2R5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGl0bGU6IFwiICsgbWVzc2FnZS50aXRsZSk7XG5cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiUmVjZWl2ZWQ6IFwiICsgbWVzc2FnZS5ib2R5O1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IG1lc3NhZ2UudGl0bGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICAgIH1cblxuICAgIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21lc3NhZ2UgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtZXNzYWdlJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl90aXRsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0aXRsZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==