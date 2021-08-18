"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "lucio@email.com": new User('lucio@email.com', 'Lucio', 'lucio123'),
    "araujo@email.com": new User('araujo@email.com', 'Araujo', 'araujo123')
};
