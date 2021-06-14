import { Metrics } from "../../entities/Metrics";

export interface MetricsEntityGateway {
  getDefaultMetrics(): Promise<Metrics>;
}