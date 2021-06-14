"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsRouter = void 0;
var express_1 = require("express");
var MetricsRouter = /** @class */ (function () {
    function MetricsRouter(getDefaultMetricsValueController) {
        this.getDefaultMetricsValueController = getDefaultMetricsValueController;
        this.router = express_1.Router();
        this.configRouter();
    }
    MetricsRouter.prototype.configRouter = function () {
        var _this = this;
        this.router.get('/api/v1/metrics/default', function (req, res) { return _this.getDefaultMetricsValueController.processRequest(req, res); });
    };
    MetricsRouter.prototype.getRouter = function () {
        return this.router;
    };
    return MetricsRouter;
}());
exports.MetricsRouter = MetricsRouter;
