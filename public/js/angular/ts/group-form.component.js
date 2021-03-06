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
var GroupFormComponent = (function () {
    function GroupFormComponent() {
        this.groupName = "";
        this.dataDismiss = "";
        this.submitted = false;
    }
    GroupFormComponent.prototype.onSubmit = function () {
        var list = _.pluck(this.groupitems, "_id");
        var group = {
            "name": this.groupName,
            "list": list.toString()
        };
        $.post('/addGroup.' + this.companyCode + '?name=' + group.name + '&list=' + group.list, function (data) {
            console.log(data);
            if (data.status === "success") {
                console.log("Group added");
            }
            else {
                console.log("Error: group not added");
            }
        });
        this.submitted = true;
        $('#myModal').modal('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GroupFormComponent.prototype, "groupitems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GroupFormComponent.prototype, "companyCode", void 0);
    GroupFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'group-form',
            templateUrl: 'group-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GroupFormComponent);
    return GroupFormComponent;
}());
exports.GroupFormComponent = GroupFormComponent;
//# sourceMappingURL=group-form.component.js.map