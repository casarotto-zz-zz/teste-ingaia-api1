import { Request, Response, Router } from "express";
import { GetDefaultMetricsValueController } from "../controllers/GetDefaultMetricsValueController";
import BaseRouter from "../definitions/BaseRouter";

export class MetricsRouter implements BaseRouter {
  private router: Router;

  constructor(
    private getDefaultMetricsValueController: GetDefaultMetricsValueController
  ) {
    this.router = Router();
    this.configRouter();
  }

  private configRouter() {
    this.router.get('/api/v1/metrics/default', (req: Request, res: Response) => this.getDefaultMetricsValueController.processRequest(req, res));
  }

  public getRouter() {
    return this.router
  }
}