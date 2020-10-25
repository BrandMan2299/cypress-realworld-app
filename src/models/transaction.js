"use strict";
exports.__esModule = true;
exports.Reasons = exports.TransactionRequestStatus = exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["pending"] = "pending";
    TransactionStatus["incomplete"] = "incomplete";
    TransactionStatus["complete"] = "complete";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var TransactionRequestStatus;
(function (TransactionRequestStatus) {
    TransactionRequestStatus["pending"] = "pending";
    TransactionRequestStatus["accepted"] = "accepted";
    TransactionRequestStatus["rejected"] = "rejected";
})(TransactionRequestStatus = exports.TransactionRequestStatus || (exports.TransactionRequestStatus = {}));
var Reasons;
(function (Reasons) {
    Reasons["food"] = "food";
    Reasons["fuel"] = "fuel";
    Reasons["entertaiment"] = "entertaiment";
    Reasons["pet"] = "pet";
    Reasons["shoping"] = "shoping";
})(Reasons = exports.Reasons || (exports.Reasons = {}));
