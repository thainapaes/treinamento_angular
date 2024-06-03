import { Component } from '@angular/core';

@Component({
  selector: 'app-component05',
  standalone: true,
  imports: [],
  templateUrl: './component05.component.html',
  styleUrl: './component05.component.css'
})
export class Component05Component {

  media:number = 6;

  nomes:string[] = ['Thaina', 'Rebeca', 'Renata', 'Beth'];
}
