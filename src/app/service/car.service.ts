// Importar o Injectable para prover a injeção de dependência
import { Injectable } from '@angular/core';

// Importar o HttpClient
import { HttpClient } from '@angular/common/http';

// Importar o modelo de produto
import { Cars } from '../model/Cars';
// Importar o RxJS
import { Observable } from 'rxjs';

// Configuração do @Injectable
@Injectable({
  providedIn: 'root'
})

// Classe
export class CarService {

  // URL da API
  url:string = 'http://localhost:3000/produtos';

  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http:HttpClient) { }

  // Método para selecionar produtos
  selecionar():Observable<Cars[]>{
    return this.http.get<Cars[]>(this.url);
  }

  // Método para cadastrar produtos
  cadastrar(obj:Cars):Observable<Cars>{
    return this.http.post<Cars>(this.url, obj);
  }

  // Método para alterar produtos
  alterar(obj:Cars):Observable<Cars>{
    return this.http.put<Cars>(`${this.url}/${obj.id}`, obj);
  }

  // Método para remover produtos
  remover(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
