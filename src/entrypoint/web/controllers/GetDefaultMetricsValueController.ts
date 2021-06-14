import { Request, Response } from "express";
import { GetDefaultMetricsValueUseCase } from "../../../core/usecases/metrics/GetDefaultMetricsValueUseCase";
import { Controller } from "../definitions/Controller";

export class GetDefaultMetricsValueController extends Controller<GetDefaultMetricsValueUseCase> {
  async processRequest(req: Request, res: Response): Promise<Response> {
    const result = await this.usecase.execute();

    if(result instanceof Error) {
      return this.fail(res, result.message);
    }

    return this.success(res, result);
  }
}