import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InteresComponent } from './components/interes/interes.component';
import { MainPageComponent } from './pages/main-page.component';
import { PlanPagosComponent } from './components/plan-pagos/plan-pagos.component';



@NgModule({
  declarations: [
    InteresComponent,
    MainPageComponent,
    PlanPagosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class SimuladorModule { }
