import { Component } from '@angular/core';
import { Component15FormularioComponent } from "../component15-formulario/component15-formulario.component";
import { Component15TabelaComponent } from "../component15-tabela/component15-tabela.component";
import { Cars } from '../model/Cars';
import { CarService } from '../service/car.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-component15',
    standalone: true,
    templateUrl: './component15.component.html',
    styleUrl: './component15.component.css',
    imports: [Component15FormularioComponent, Component15TabelaComponent, ReactiveFormsModule]
})
export class Component15Component {

  nomes:string[] =['Thaina', 'Rebeca', 'Renata', 'Beth'];

  cadastrar(nome:string){
    this.nomes.push(nome);
  }

}
