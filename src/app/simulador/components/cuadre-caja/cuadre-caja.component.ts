import { Component, Input } from '@angular/core';
import { DenominacionMoneda } from '../../interfaces/denominacionMoneda.interface';

@Component({
  selector: 'app-cuadre-caja',
  templateUrl: './cuadre-caja.component.html'
})
export class CuadreCajaComponent {

  public dineroCaja: DenominacionMoneda[] = [
    { denominacion : 's/. 200.00', valor : 200.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 100.00', valor : 100.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 50.00', valor : 50.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 20.00', valor : 20.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 10.00', valor : 10.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 5.00', valor : 50.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 2.00', valor : 2.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 1.00', valor : 1.00, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 0.50', valor : 0.50, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 0.20', valor : 0.20, cantidad : 0, get total() {return this.valor * this.cantidad}},
    { denominacion : 's/. 0.10', valor : 0.10, cantidad : 0, get total() {return this.valor * this.cantidad}}
  ];;

  public cantidadMonedas: number = 0;
  public totalCaja: number = 0;


  calcularTotal(): void {

    debugger;

    this.cantidadMonedas = this.dineroCaja.reduce((total, denominacion) => total + denominacion.cantidad, 0);
    this.totalCaja = this.dineroCaja.reduce((suma, moneda) => suma + (moneda.valor * moneda.cantidad), 0);
  }

}
