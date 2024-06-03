import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.css'
})
export class Component07Component {
  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  });

}
