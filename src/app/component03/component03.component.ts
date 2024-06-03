import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {
  imagem:string = 'assets/dia.jpg';

  alterarImagem(){
    if (this.imagem === 'assets/dia.jpg') {
      this.imagem = 'assets/noite.jpg';
    } else {
      this.imagem = 'assets/dia.jpg';
    }
  }

}
