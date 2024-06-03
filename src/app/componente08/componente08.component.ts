import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../model/Usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(null),
    email: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    telefone: new FormControl('')
  });

  btnCadastrar:boolean = true;

  vetor:Usuario[] = [];
  indice:number = -1;

  cadastrar(){
    this.vetor.push(this.formulario.value as Usuario);
    this.formulario.reset();
    //console.table(this.vetor);
  }

  selecionar(indice:number) {
    this.indice = indice;

    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      sobrenome: this.vetor[indice].sobrenome,
      dataNascimento: this.vetor[indice].dataNascimento,
      email: this.vetor[indice].email,
      login: this.vetor[indice].login,
      password: this.vetor[indice].password,
      telefone: this.vetor[indice].telefone
    });

    this.btnCadastrar = false;
  }

  alterar(){
    this.vetor[this.indice] = this.formulario.value as Usuario;
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  remover(){
    this.vetor.splice(this.indice, 1);
    this.formulario.reset();

    this.btnCadastrar = true;
  }

  cancelar() {
    this.formulario.reset();
    this.btnCadastrar = true;
  }

}
