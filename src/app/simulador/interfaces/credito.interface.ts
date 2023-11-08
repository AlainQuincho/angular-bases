import { CuotaCredito } from "./cuota.interface";

export interface Credito {
  capital: number;
  fechaDesembolso: Date;
  numeroCuotas: number;
  periodo: string;
  tasaInteres: number;
  diasGracia: number;
  // resultados
  interes: number;
  cuota: number;
  fechaUltimaCuota: Date;
  planPagos: CuotaCredito[];
}
