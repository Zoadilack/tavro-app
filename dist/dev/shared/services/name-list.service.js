"use strict";
var NameListService = (function () {
    function NameListService() {
        this.names = [
            'Edsger Dijkstra',
            'Donald Knuth',
            'Alan Turing',
            'Grace Hopper'
        ];
    }
    NameListService.prototype.get = function () {
        return this.names;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    NameListService.prototype.remove = function (value) {
        var i = this.names.indexOf(value);
        if (i !== -1) {
            this.names.splice(this.names.indexOf(value), 1);
        }
    };
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUNFLFVBQUssR0FBRztZQUNOLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGNBQWM7U0FDZixDQUFDO0lBY0osQ0FBQztJQVpDLDZCQUFHLEdBQUg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsNkJBQUcsR0FBSCxVQUFJLEtBQWE7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsZ0NBQU0sR0FBTixVQUFPLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHVCQUFlLGtCQW9CM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIHtcbiAgbmFtZXMgPSBbXG4gICAgJ0Vkc2dlciBEaWprc3RyYScsXG4gICAgJ0RvbmFsZCBLbnV0aCcsXG4gICAgJ0FsYW4gVHVyaW5nJyxcbiAgICAnR3JhY2UgSG9wcGVyJ1xuICBdO1xuXG4gIGdldCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZXM7XG4gIH1cbiAgYWRkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm5hbWVzLnB1c2godmFsdWUpO1xuICB9XG4gIHJlbW92ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGkgPSB0aGlzLm5hbWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgdGhpcy5uYW1lcy5zcGxpY2UodGhpcy5uYW1lcy5pbmRleE9mKHZhbHVlKSwxKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
