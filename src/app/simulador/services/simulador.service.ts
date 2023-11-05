import { Injectable } from '@angular/core';
import { Credito } from '../interfaces/credito.interface';
import { CuotaCredito } from '../interfaces/cuota.interface';

@Injectable({ providedIn: 'root' })
export class SimuladorService {

  public creditoSimulado: Credito = {
    capital: 0,
    fechaDesembolso: new Date(),
    numeroCuotas: 0,
    periodo: 0,
    tasaInteres: 0,
    diasGracia: 0,
    interes: 0,
    cuota: 0,
    fechaUltimaCuota: new Date(),
    planPagos: []
  };

  simularPpg(dato: Credito): void {
    console.log('Iniciando simulación');
    console.log(this.creditoSimulado.fechaDesembolso);

    this.creditoSimulado.interes = Math.round(dato.tasaInteres / 100.00 * dato.capital);

    this.creditoSimulado.planPagos = [];

    const capitalCuota = Math.round(dato.capital / dato.numeroCuotas);
    const interesCuota = Math.round(dato.interes / dato.numeroCuotas)

    let capitalAcumulado: number = 0;
    let InteresAcumulado: number = 0;

    let fecha: Date = dato.fechaDesembolso;

    for (let i = 1; i <= dato.numeroCuotas; i++) {
      let cuota =  {
        cuota : i,
        fechaCuota :  this.sumarDias(fecha, i),
        capital : capitalCuota,
        interes : interesCuota,
        total : capitalCuota + interesCuota,
      }

      if (i === 1){ // primera cuota
        cuota.fechaCuota = dato.fechaDesembolso;
      }else if (i === dato.numeroCuotas){ // ultima cuota
        cuota.capital = this.creditoSimulado.capital - capitalAcumulado;
        cuota.interes = this.creditoSimulado.interes - InteresAcumulado;
      }

      capitalAcumulado += cuota.capital;
      InteresAcumulado += cuota.interes;
      fecha = cuota.fechaCuota;

      console.log(cuota);

      this.creditoSimulado.planPagos.push(cuota);
    }

    console.log(this.creditoSimulado);
  }

  limpiarPpg(): void {
    this.creditoSimulado = {
      capital: 0,
      fechaDesembolso: new Date(),
      numeroCuotas: 0,
      periodo: 0,
      tasaInteres: 0,
      diasGracia: 0,
      interes: 0,
      cuota: 0,
      fechaUltimaCuota: new Date(),
      planPagos: []
    };
  }

  sumarDias(fecha: Date, dias: number){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }
}
