///<reference path="types.ts" />

import express from "express";
<<<<<<< HEAD
import { getTransactionsForUserForApi } from "./database";
import { ensureAuthenticated, validateMiddleware } from "./helpers";
import {
  sanitizeTransactionStatus,
  sanitizeRequestStatus,
  isTransactionQSValidator,
} from "./validators";
import {
  getPaginatedItems,
  isAcceptedRequestTransaction,
  isRequestTransaction,
} from "../src/utils/transactionUtils";
import { Transaction } from "models";
const router = express.Router();

router.get(
  "/",
  ensureAuthenticated,
  validateMiddleware([
    sanitizeTransactionStatus,
    sanitizeRequestStatus,
    ...isTransactionQSValidator,
  ]),
  (req, res) => {
    /* istanbul ignore next */
    const transactions = getTransactionsForUserForApi(req.user?.id!, req.query) as Transaction[];
    let functionsData: Transaction[] = [];//if i am charged, the ammount is minus, if payed the ammount is plus
    transactions.forEach((transaction) => {
      if (transaction.receiverId == req.user?.id) {
        if (isRequestTransaction(transaction)) {
          if (isAcceptedRequestTransaction(transaction)) {
            transaction.amount *= -1;
            functionsData.push(transaction);
          } //got charged, invert ammount!
        } else functionsData.push(transaction); // i got paid, ammount should stay
      } else if (transaction.senderId == req.user?.id) {
        if (isRequestTransaction(transaction)) {
          if (isAcceptedRequestTransaction(transaction)) functionsData.push(transaction); //i got paid, ammount should stay
        } else {
          transaction.amount *= -1;
          functionsData.push(transaction);
        } //got charged, invert ammount!
      }
    });

    // const sentData={
    //     Pie:galsPiefunction(functionsData),
    //     Column:galsColumnFunction(functionsData)
    // }

    // const { totalPages, data: paginatedItems } = getPaginatedItems(
    //   req.query.page,
    //   req.query.limit,
    //   functionsData
    // );

    // res.status(200);
    // res.json({
    //   pageData: {
    //     page: res.locals.paginate.page,
    //     limit: res.locals.paginate.limit,
    //     hasNextPages: res.locals.paginate.hasNextPages(totalPages),
    //     totalPages,
    //   },
    //   results: paginatedItems,
    // });

    console.log(req.query);
    res.json({ results: functionsData });
  }
);

export default router;
=======
import { remove, isEmpty, slice, concat } from "lodash/fp";
import {
    getTransactionsForUserContacts,
    createTransaction,
    updateTransactionById,
    getPublicTransactionsDefaultSort,
    getTransactionByIdForApi,
    getTransactionsForUserForApi,
    getPublicTransactionsByQuery,
} from "./database";
import { ensureAuthenticated, validateMiddleware } from "./helpers";
import {
    sanitizeTransactionStatus,
    sanitizeRequestStatus,
    isTransactionQSValidator,
    isTransactionPayloadValidator,
    shortIdValidation,
    isTransactionPatchValidator,
    isTransactionPublicQSValidator,
} from "./validators";
import { getPaginatedItems } from "../src/utils/transactionUtils";
const router = express.Router();

router.get(
    "/",
    ensureAuthenticated,
    validateMiddleware([
        sanitizeTransactionStatus,
        sanitizeRequestStatus,
        ...isTransactionQSValidator,
    ]),
    (req, res) => {
        /* istanbul ignore next */
        // const transactions = getTransactionsForUserForApi(req.user?.id!, req.query);

        // const { totalPages, data: paginatedItems } = getPaginatedItems(
        //     req.query.page,
        //     req.query.limit,
        //     transactions
        // );

        // res.status(200);
        // res.json({
        //     pageData: {
        //         page: res.locals.paginate.page,
        //         limit: res.locals.paginate.limit,
        //         hasNextPages: res.locals.paginate.hasNextPages(totalPages),
        //         totalPages,
        //     },
        //     results: paginatedItems,
        // });
        console.log(req);
        res.json({ messege: "bob" })
    }
);

export default router
>>>>>>> eb948ea... testing route
