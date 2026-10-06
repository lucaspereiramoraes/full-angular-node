import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root' // fica disponível no app inteiro
})
export class TarefasService {
  private url = 'https://meu-backend-f2z1.onrender.com/tarefas';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Tarefa[]>(this.url);
  }

  adicionar(texto: string) {
    return this.http.post<Tarefa>(this.url, { texto });
  }

  alternarConcluida(id: number) {
    return this.http.put(`${this.url}/${id}`, {});
  }

  remover(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}