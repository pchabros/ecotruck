export interface Telemetry {
  id: number;
  vehicle: number;
  timestamp: string;
  speed: number;
  mileage: number;
  fuelTankLevel: number;
  latitude: number;
  longitude: number;
}

export type WeeklyFuelData = {
  week: string;
  avgConsumption: number;
}[];
