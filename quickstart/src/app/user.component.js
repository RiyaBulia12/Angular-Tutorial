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
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'Learning Angular';
    }
    AppComponent.prototype.getUsers = function () {
        this.users = this.userService.getUsers();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n  .selected {\n    background-color: #6d3f5f !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li, input {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #c39d9d;;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color:rgb(152, 118, 118) !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #fff;\n    background-color: #7b5c78;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #6d3e5e;\n    line-height: 1em;\n    position: relative;\n    left: 0px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
        template: "\n    <h1>{{title}}</h1>\n    \n    <ul class=\"heroes\">\n      <li *ngFor=\"let user of users\" [class.selected]=\"user === selectedUser\" (click)=\"onSelect(user)\">\n      <span class=\"badge\">{{user.id}}</span> {{user.name}}\n      </li>\n    </ul>\n    <user-detail [user]=\"selectedUser\"></user-detail>\n    \n  ",
        providers: [user_service_1.UserService],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=user.component.js.map