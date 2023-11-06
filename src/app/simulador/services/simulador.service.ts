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

    debugger;

    this.creditoSimulado.interes = parseFloat((dato.tasaInteres / 100.00 * dato.capital).toFixed(1));
    this.creditoSimulado.capital = parseFloat(dato.capital.toFixed(2));
    dato.interes = parseFloat(this.creditoSimulado.interes.toFixed(2));

    this.creditoSimulado.planPagos = [];

    const capitalCuota: number = parseFloat((dato.capital / dato.numeroCuotas).toFixed(2));
    const interesCuota = parseFloat((dato.interes / dato.numeroCuotas).toFixed(2));
    const cuotaNormal = parseFloat((capitalCuota +  interesCuota).toFixed(1));
    const fechaInicio = this.sumarDias(dato.fechaDesembolso, 1);

    let capitalAcumulado: number = 0;
    let InteresAcumulado: number = 0;

    for (let i = 1; i <= dato.numeroCuotas; i++) {
      let nuevaCuota =  {
        cuota : i,
        fechaCuota :  this.sumarDias(fechaInicio, i),
        capital : capitalCuota,
        interes : parseFloat((cuotaNormal - capitalCuota).toFixed(2)),
        total : cuotaNormal,
      }

      if( i=== 1){ // primera cuota
        nuevaCuota.fechaCuota = this.sumarDias(fechaInicio, i);
      }else if (i === dato.numeroCuotas){ // ultima cuota

        nuevaCuota.fechaCuota = this.sumarDias(fechaInicio, i);

        // Ajuste en la primera cuota
        this.creditoSimulado.planPagos[0].capital = parseFloat((dato.capital - capitalAcumulado).toFixed(2));
        this.creditoSimulado.planPagos[0].interes = parseFloat((dato.interes - InteresAcumulado).toFixed(2));
        this.creditoSimulado.planPagos[0].total = parseFloat((this.creditoSimulado.planPagos[0].capital + this.creditoSimulado.planPagos[0].interes).toFixed(1));
      }

      capitalAcumulado += nuevaCuota.capital;
      InteresAcumulado += nuevaCuota.interes;

      this.creditoSimulado.planPagos.push(nuevaCuota);
    }
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
    let fechaNueva = new Date(fecha);
    fechaNueva.setDate(fechaNueva.getDate() + dias);
    return fechaNueva;
  }
}
