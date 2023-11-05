import { Component, Input } from '@angular/core';
import { CuotaCredito } from '../../interfaces/cuota.interface';

@Component({
  selector: 'sim-plan-pagos',
  templateUrl: './plan-pagos.component.html'
})
export class
PlanPagosComponent {

  @Input()
  public ppg: CuotaCredito[] = [];

  get capitalTotal(): number{
    let sumaCapital:number = 0;

    this.ppg.forEach((cuota) => { sumaCapital += cuota.total });

    return sumaCapital;
  }
  get interesTotal(): number {
    let sumaInteres: number = 0;

    this.ppg.forEach((cuota) => { sumaInteres += cuota.interes });

    return sumaInteres;
  }
  get cuotaNormal(): number {
    // let numeroCuotas = this.ppg!.length;
    // let cuota = this.ppg[numeroCuotas - 1];
    // return cuota.capital || 0;

    return 0;
  }

}
