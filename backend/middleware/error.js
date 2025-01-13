const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Handle CastError (e.g., invalid MongoDB ObjectId)
    if (err.name === "CastError") {
        const message = `Resource not found with this ID. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle duplicate key errors (MongoDB error code 11000)
    if (err.code === 11000) {
        const message = `Duplicate key entered: ${Object.keys(err.keyValue).join(", ")}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle JSON Web Token errors
    if (err.name === "JsonWebTokenError") {
        const message = "Your URL is invalid. Please try again later.";
        err = new ErrorHandler(message, 400);
    }

    // Send the error response
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};