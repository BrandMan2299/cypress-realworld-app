"use strict";
exports.__esModule = true;
exports.Reasons = void 0;
var DefaultPrivacyLevel;
(function (DefaultPrivacyLevel) {
    DefaultPrivacyLevel["private"] = "private";
    DefaultPrivacyLevel["public"] = "public";
    DefaultPrivacyLevel["contacts"] = "contacts";
})(DefaultPrivacyLevel || (DefaultPrivacyLevel = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["pending"] = "pending";
    TransactionStatus["incomplete"] = "incomplete";
    TransactionStatus["complete"] = "complete";
})(TransactionStatus || (TransactionStatus = {}));
var Reasons;
(function (Reasons) {
    Reasons["food"] = "food";
    Reasons["fuel"] = "fuel";
    Reasons["entertaiment"] = "entertaiment";
    Reasons["pet"] = "pet";
    Reasons["shoping"] = "shoping";
})(Reasons = exports.Reasons || (exports.Reasons = {}));
function Pies(transactions) {
    var solution = { other: 0 };
    transactions.forEach(function (trans) {
        trans.amount = trans.amount <= 0 ? trans.amount : 0;
        if (trans.reasonOfPayment) {
            if (!solution[trans.reasonOfPayment]) {
                solution[trans.reasonOfPayment] = trans.amount;
            }
            else {
                solution[trans.reasonOfPayment] += trans.amount;
            }
        }
        else {
            solution.other += trans.amount;
        }
    });
    var resultPieData = [{ label: "AA", amount: 5 }, { label: "BB", amount: 6 }, { label: "CC", amount: 7 },];
    console.log("");
    console.log("");
    //   console.log({"transactions": transactions});
    console.log({ "solution": solution });
    return resultPieData;
}
Pies([
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        reasonOfPayment: Reasons.food,
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        reasonOfPayment: Reasons.fuel,
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        reasonOfPayment: Reasons.fuel,
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        reasonOfPayment: Reasons.entertaiment,
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        reasonOfPayment: Reasons.pet,
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        reasonOfPayment: Reasons.pet,
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        reasonOfPayment: Reasons.shoping,
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
    {
        privacyLevel: DefaultPrivacyLevel.private,
        id: "-jCJOEkLh0J",
        uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
        source: "RskoB7r4Bic",
        amount: -111111,
        description: "Payment: t45AiwidW to qywYp6hS0U",
        receiverId: "qywYp6hS0U",
        senderId: "t45AiwidW",
        balanceAtCompletion: 38316,
        status: TransactionStatus.complete,
        requestStatus: "",
        requestResolvedAt: "2020-06-03T01:22:21.937Z",
        createdAt: new Date("2019-08-24T18:58:38.088Z"),
        modifiedAt: new Date("2020-05-21T11:46:37.285Z")
    },
]);
