import { Component,  } from '@angular/core';
import { SimuladorModule } from '../simulador.module';
import { SimuladorService } from '../services/simulador.service';
import { Credito } from '../interfaces/credito.interface';
import { CuotaCredito } from '../interfaces/cuota.interface';

@Component({
  selector: 'app-sim-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor(private simuladorService:SimuladorService) {

  }

  get ppg(): CuotaCredito[]{
    return [...this.simuladorService.creditoSimulado.planPagos];
  }

  onSimular(dato: Credito): void {
    this.simuladorService.simularPpg(dato);
  }
}
