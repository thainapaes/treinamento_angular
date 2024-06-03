import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cars } from '../model/Cars';
import { CarService } from '../service/car.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-component13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './component13.component.html',
  styleUrl: './component13.component.css'
})
export class Component13Component {

  cars:Cars[] = [];
  btnCadastrar:boolean = true;
  formulario = new FormGroup({
    id: new FormControl(null),
    placa: new FormControl(''),
    modelo: new FormControl(''),
    cor: new FormControl(''),
    car_year: new FormControl(null)
  })

  constructor(private service:CarService) {}

  ngOnInit(){
    this.selecionar();
  }

  selecionar(){
    this.service.selecionar().subscribe(retorno => {this.cars = retorno});
  }

  cadastrarCar() {
    this.service.cadastrar(this.formulario.value as Cars).subscribe(retorno => {
      this.cars.push(retorno);
      this.formulario.reset();
    });
  }

  selecionarCar(indice:number) {
    this.formulario.setValue({
      id: this.cars[indice].id,
      placa: this.cars[indice].placa,
      modelo: this.cars[indice].modelo,
      cor: this.cars[indice].cor,
      car_year: this.cars[indice].car_year
    });

    this.btnCadastrar = false;
  }

  alterar(){
    this.service.alterar(this.formulario.value as Cars).subscribe(retorno => {
      //obj => {} cada linha do seu vetor
      let indiceAlterado = this.cars.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      this.cars[indiceAlterado] = retorno;
      this.formulario.reset();

      this.btnCadastrar = true;

    });
  }

  remover() {
    this.service.remover(this.formulario.value.id).subscribe(() => {});

    let indiceRemovido = this.cars.findIndex(obj => {
      return obj.id === this.formulario.value.id;
    });

    this.cars.splice(indiceRemovido, 1);
    this.formulario.reset();

    this.btnCadastrar = true;


  }

}
