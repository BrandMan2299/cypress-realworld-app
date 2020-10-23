///<reference path="types.ts" />

import express from "express";
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