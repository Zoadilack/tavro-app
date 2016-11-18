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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var name_list_service_1 = require('../../shared/services/name-list.service');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
    }
    HomeComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.removeName = function (value) {
        this.nameListService.remove(value);
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'sd-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [name_list_service_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpFLGtDQUE4Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBU3hFO0lBRUUsdUJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFNdkQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBeEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsd0JBQWUsQ0FBQztTQUMvQyxDQUFDOztxQkFBQTtJQW1CRixvQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlkscUJBQWEsZ0JBa0J6QixDQUFBIiwiZmlsZSI6ImhvbWUvY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbmltcG9ydCB7TmFtZUxpc3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgbmV3TmFtZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UpIHt9XG5cbiAgLypcbiAgICogQHBhcmFtIG5ld25hbWUgIGFueSB0ZXh0IGFzIGlucHV0LlxuICAgKiBAcmV0dXJucyByZXR1cm4gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLmFkZCh0aGlzLm5ld05hbWUpO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbW92ZU5hbWUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLnJlbW92ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=
