import { Metrics } from "../../core/entities/Metrics";
import { MetricsEntityGateway } from "../../core/usecases/metrics/MetricsEntityGateway";

export class MetricsInMemoryEntityGateway implements MetricsEntityGateway {
  async getDefaultMetrics(): Promise<Metrics> {
    return {
      id: '011f3e2f33f352d664e6756157660286',
      type: 'square_meters',
      valuePerUnity: 1000
    }
  }
}