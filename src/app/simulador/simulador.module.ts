import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InteresComponent } from './components/interes/interes.component';
import { MainPageComponent } from './pages/main-page.component';
import { PlanPagosComponent } from './components/plan-pagos/plan-pagos.component';
import { CuadreCajaComponent } from './components/cuadre-caja/cuadre-caja.component';



@NgModule({
  declarations: [
    InteresComponent,
    MainPageComponent,
    PlanPagosComponent,
    CuadreCajaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
    CuadreCajaComponent
  ]
})
export class SimuladorModule { }
