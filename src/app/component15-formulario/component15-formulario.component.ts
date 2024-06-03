import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component15-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component15-formulario.component.html',
  styleUrl: './component15-formulario.component.css'
})
export class Component15FormularioComponent {

  nome:string = '';

  @Output() funcao = new EventEmitter<string>();

  cadastrarNome() {
    this.funcao.emit(this.nome);
  }
}
