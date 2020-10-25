"use strict";
exports.__esModule = true;
exports.NotificationsType = exports.PaymentNotificationStatus = void 0;
var PaymentNotificationStatus;
(function (PaymentNotificationStatus) {
    PaymentNotificationStatus["requested"] = "requested";
    PaymentNotificationStatus["received"] = "received";
    PaymentNotificationStatus["incomplete"] = "incomplete";
})(PaymentNotificationStatus = exports.PaymentNotificationStatus || (exports.PaymentNotificationStatus = {}));
var NotificationsType;
(function (NotificationsType) {
    NotificationsType["payment"] = "payment";
    NotificationsType["like"] = "like";
    NotificationsType["comment"] = "comment";
})(NotificationsType = exports.NotificationsType || (exports.NotificationsType = {}));
