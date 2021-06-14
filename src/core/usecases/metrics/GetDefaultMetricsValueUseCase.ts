import { UseCase } from "../../definition/UseCase";
import { UseCaseError } from "../../definition/UseCaseError";
import { MetricsEntityGateway } from "./MetricsEntityGateway";

interface GetDefaultMetricsValueResponseDTO {
  valuePerUnity: number;
}

export class GetDefaultMetricsValueUseCase implements UseCase<{}, GetDefaultMetricsValueResponseDTO> {

  constructor(private metricsEntityGateway: MetricsEntityGateway) { }

  async execute(): Promise<GetDefaultMetricsValueResponseDTO | UseCaseError> {
    const metric = await this.metricsEntityGateway.getDefaultMetrics();
    return { valuePerUnity: metric.valuePerUnity };
  }
}