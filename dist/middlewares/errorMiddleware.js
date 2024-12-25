"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack (for debugging)
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        error: {
            message: err.message || "Internal Server Error",
            status: statusCode,
        },
    });
};
exports.errorMiddleware = errorMiddleware;
