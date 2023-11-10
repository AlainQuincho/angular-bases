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

  get capitalTotal(): number {
    let sumaCapital: number = 0;

    this.ppg.forEach((cuota) => { sumaCapital += cuota.capital });

    return sumaCapital;
  }
  get interesTotal(): number {
    let sumaInteres: number = 0;

    this.ppg.forEach((cuota) => { sumaInteres += cuota.interes });

    return sumaInteres;
  }
  get cuotaNormal(): number {
    let numeroCuotas = this.ppg.length;

    if (numeroCuotas > 0) {
      let cuota = this.ppg[numeroCuotas - 1];
      if (cuota) {
        return parseFloat((cuota.capital + cuota.interes).toFixed(2));
      }
    }

    return 0;
  }

}
