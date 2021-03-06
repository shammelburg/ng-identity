var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var Account = (function () {
            function Account(accountService, authService, $timeout) {
                var _this = this;
                this.accountService = accountService;
                this.authService = authService;
                this.$timeout = $timeout;
                this.authService.Check(['Admin']);
                this.message = 'Confirm Email';
                this.accountService.UserInfo().then(function (response) { _this.user = response.data; }).catch(Common.Error.prototype.LogError);
            }
            Account.prototype.SendConfirmation = function () {
                var _this = this;
                this.accountService.SendConfirmationEmail().then(function () {
                    _this.message = 'Confirmation sent';
                    _this.$timeout(function () {
                        this.message = 'Confirm Email';
                    }, 5000);
                }).catch(Common.Error.prototype.LogError);
            };
            ;
            Account.$inject = ['accountService', 'authService', '$timeout'];
            return Account;
        })();
        angular.module('app').controller('AccountController', Account);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=AccountController.js.map