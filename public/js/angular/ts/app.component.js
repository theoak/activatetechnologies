"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('./user.service');
var AppComponent = (function () {
    function AppComponent(userService, elementRef) {
        this.userService = userService;
        this.elementRef = elementRef;
        this.users = [];
        this.displayedCols = [];
        this.companyCode = elementRef.nativeElement.getAttribute('[companycode]');
    }
    AppComponent.prototype.getFormattedDate = function (date) {
        // return new moment().format('HH:mm');
        var d;
        d = new moment(date).format('DD/MM/YY HH:mm');
        return d;
    };
    AppComponent.prototype.getTimer = function (interactionTime, receivedTime) {
        var it = new moment(interactionTime);
        var rt = new moment(receivedTime);
        var now = new moment();
        var endOfWindow = new moment(interactionTime);
        endOfWindow.add(24, 'hours');
        if (endOfWindow.isAfter(now)) {
            var duration = moment.duration(endOfWindow.diff(now));
            return this.formatDuration(duration);
        }
        else if (rt.isBefore(it) || receivedTime == null) {
            var duration = moment.duration(it.diff(now));
            return this.formatDuration(duration);
        }
        else {
            var duration = moment.duration(it.diff(now));
            return this.formatDuration(duration);
        }
    };
    AppComponent.prototype.formatDuration = function (duration) {
        var hrs = String(duration.asHours()).split(".")[0];
        if (parseInt(hrs) < 0) {
            return duration.humanize(true);
        }
        var mins = Math.abs(duration.minutes());
        var ph = "";
        if (mins < 10) {
            ph = "0";
        }
        return hrs + "h" + ph + mins + "m to go";
    };
    AppComponent.prototype.getColour = function (interactionTime, receivedTime) {
        var it = new moment(interactionTime);
        var rt = new moment(receivedTime);
        var now = new moment();
        var endOfWindow = new moment(interactionTime);
        endOfWindow.add(24, 'hours');
        if (endOfWindow.isAfter(now)) {
            return "green";
        }
        else if (rt.isBefore(it) || receivedTime == null) {
            return "orange";
        }
        else {
            return "red";
        }
    };
    //  var formatDuration = function(duration) {
    //   var hrs = String(duration.asHours()).split(".")[0];
    //   if(parseInt(hrs) < 0) {
    //     return duration.humanize(true);
    //   }
    //   var mins = Math.abs(duration.minutes());
    //   if (mins < 10) {
    //     var ph = "0";
    //   } else {
    //     var ph = "";
    //   }
    //   return hrs + "h" + ph + mins + "m to go";
    // }
    AppComponent.prototype.ngOnInit = function () {
        this.currentHead = -1;
        this.orderField = '';
        this.getUsers();
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers(this.companyCode)
            .subscribe(function (users) { return _this.users = users; });
    };
    AppComponent.prototype.headingClicked = function (head) {
        if (this.currentHead === head) {
            this.isReversed = !this.isReversed;
        }
        else {
            this.isReversed = false;
        }
        this.currentHead = head;
        switch (head) {
            case 0:
                this.orderField = 'firstName';
                break;
            case 1:
                this.orderField = 'gender';
                break;
            case 2:
                this.orderField = 'phoneNumber';
                break;
            case 3:
                this.orderField = 'email';
                break;
            case 4:
                this.orderField = 'preferredPosition';
                break;
            case 5:
                this.orderField = 'backupPosition';
                break;
            case 6:
                this.orderField = 'level';
                break;
            case 7:
                this.orderField = 'type';
                break;
            case 8:
                this.orderField = 'signedUpDate';
                break;
            case 9:
                this.orderField = 'interactionTime';
                break;
            case 10:
                this.orderField = '_id';
                break;
        }
    };
    AppComponent.prototype.isColDisplayed = function (head) {
        for (var _i = 0; _i < this.users.length; _i++) {
            switch (head) {
                case 2:
                    if (this.users[_i].phoneNumber != null) {
                        return true;
                    }
                    break;
                case 3:
                    if (this.users[_i].email != null) {
                        return true;
                    }
                    break;
                case 4:
                    if (this.users[_i].preferredPosition != null) {
                        return true;
                    }
                    break;
                case 5:
                    if (this.users[_i].backupPosition != null) {
                        return true;
                    }
                    break;
                case 6:
                    if (this.users[_i].level != null) {
                        return true;
                    }
                    break;
                case 7:
                    if (this.users[_i].type != null) {
                        return true;
                    }
                    break;
            }
        }
        return false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-table',
            templateUrl: 'js/angular/ts/app.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map