import { Component } from '@angular/core';

@Component({
  selector: 'app-component17',
  standalone: true,
  imports: [],
  templateUrl: './component17.component.html',
  styleUrl: './component17.component.css'
})
export class Component17Component {

  nome:string = 'Thaina';
  media:number = 0;

  calculo(numero1:number, numero2:number){
    return(numero1+numero2)/2;
  }

}
