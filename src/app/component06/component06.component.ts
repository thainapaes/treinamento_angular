import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component06',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component06.component.html',
  styleUrl: './component06.component.css'
})
export class Component06Component {

  nome: string = '';
  cidade: string = '';

}
