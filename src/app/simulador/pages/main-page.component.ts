import { Component,  } from '@angular/core';
import { SimuladorModule } from '../simulador.module';
import { SimuladorService } from '../services/simulador.service';
import { Credito } from '../interfaces/credito.interface';
import { CuotaCredito } from '../interfaces/cuota.interface';
import { DenominacionMoneda } from '../interfaces/denominacionMoneda.interface';

@Component({
  selector: 'app-sim-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public operacion:string;

  constructor(private simuladorService:SimuladorService) {
    this.operacion = "1";
  }

  get ppg(): CuotaCredito[]{
    return [...this.simuladorService.creditoSimulado.planPagos];
  }

  onSimular(dato: Credito): void {
    this.simuladorService.simularPpg(dato);
  }

}
