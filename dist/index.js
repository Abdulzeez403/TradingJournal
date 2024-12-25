"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./config/logger"));
const env_1 = require("./config/env");
const db_1 = __importDefault(require("./config/db"));
const rootRoute_1 = __importDefault(require("./routes/rootRoute"));
const http_1 = require("http");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
(0, db_1.default)();
// Define and apply middleware
const setupMiddleware = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    // app.use(authMiddleware);
};
// Define routes
const setupRoutes = (app) => {
    app.use("/api/v1", rootRoute_1.default);
    // Default route for unmatched paths
    app.use("*", (req, res) => {
        res.json({ message: "TradingJournal" });
    });
};
(0, db_1.default)();
const startServer = (server, port) => {
    server.listen(port, () => {
        logger_1.default.info(`Server running on port ${port}`);
    });
};
mongoose_1.default.connection.once("open", () => {
    setupMiddleware(app);
    // initializeSocket(httpServer);
    setupRoutes(app);
    app.use(errorMiddleware_1.errorMiddleware);
    startServer(httpServer, parseInt(env_1.config.PORT));
});
