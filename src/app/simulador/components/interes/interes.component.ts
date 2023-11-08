import { Component, EventEmitter, Output } from '@angular/core';
import { Credito } from '../../interfaces/credito.interface';
import { TipoPeriodo } from '../../interfaces/tipoPeriodo.interface';
import { CuotaCredito } from '../../interfaces/cuota.interface';

@Component({
  selector: 'sim-interes-credito',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css']
})
export class InteresComponent {

  @Output()
  public onNewSimulacion: EventEmitter<Credito> = new EventEmitter();

  public credito: Credito = {
    cuota: 0.00,
    capital: 0,
    fechaDesembolso: new Date(),
    numeroCuotas: 0,
    periodo: '',
    tasaInteres: 0,
    diasGracia: 0,
    interes: 0,
    fechaUltimaCuota: new Date(),
    planPagos: []
  };

  emitSimular(): void {
    this.onNewSimulacion.emit(this.credito);

    console.log(this.onNewSimulacion);
  }

  cambioValor(event: Event): void {
    debugger;
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.credito.periodo = selectedValue;
  }
}
