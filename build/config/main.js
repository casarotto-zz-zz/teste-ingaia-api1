"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var GetDefaultMetricsValueUseCase_1 = require("../core/usecases/metrics/GetDefaultMetricsValueUseCase");
var MetricsInMemoryEntityGateway_1 = require("../data/metrics/MetricsInMemoryEntityGateway");
var ExpressApp_1 = require("../entrypoint/ExpressApp");
var GetDefaultMetricsValueController_1 = require("../entrypoint/web/controllers/GetDefaultMetricsValueController");
var MetricsRouter_1 = require("../entrypoint/web/routers/MetricsRouter");
var SwaggerRouter_1 = require("../entrypoint/web/routers/SwaggerRouter");
function main() {
    // Gateway
    var metricsEntityGateway = new MetricsInMemoryEntityGateway_1.MetricsInMemoryEntityGateway();
    // UseCases
    var getDefaultMetricsValueUseCase = new GetDefaultMetricsValueUseCase_1.GetDefaultMetricsValueUseCase(metricsEntityGateway);
    // Controllers
    var getDefaultMetricsValueController = new GetDefaultMetricsValueController_1.GetDefaultMetricsValueController(getDefaultMetricsValueUseCase);
    // Routers
    var metricsRouter = new MetricsRouter_1.MetricsRouter(getDefaultMetricsValueController);
    var swaggerRouter = new SwaggerRouter_1.SwaggerRouter();
    // App
    var app = new ExpressApp_1.ExpressApp(swaggerRouter, metricsRouter);
    app.boot();
}
exports.main = main;
