import { GetDefaultMetricsValueUseCase } from "../core/usecases/metrics/GetDefaultMetricsValueUseCase";
import { MetricsInMemoryEntityGateway } from "../data/metrics/MetricsInMemoryEntityGateway";
import { ExpressApp } from "../entrypoint/ExpressApp";
import { GetDefaultMetricsValueController } from "../entrypoint/web/controllers/GetDefaultMetricsValueController";
import { MetricsRouter } from "../entrypoint/web/routers/MetricsRouter";
import { SwaggerRouter } from "../entrypoint/web/routers/SwaggerRouter";

export function main() {
  // Gateway
  const metricsEntityGateway = new MetricsInMemoryEntityGateway();

  // UseCases
  const getDefaultMetricsValueUseCase = new GetDefaultMetricsValueUseCase(metricsEntityGateway);

  // Controllers
  const getDefaultMetricsValueController = new GetDefaultMetricsValueController(getDefaultMetricsValueUseCase);

  // Routers
  const metricsRouter = new MetricsRouter(getDefaultMetricsValueController);
  const swaggerRouter = new SwaggerRouter();

  // App
  const app = new ExpressApp(swaggerRouter, metricsRouter);

  app.boot();
}