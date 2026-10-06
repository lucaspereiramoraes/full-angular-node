import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TarefasService, Tarefa } from '../../services/tarefas';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaTarefa = '';

  constructor(private tarefasService: TarefasService, private cdr: ChangeDetectorRef) {}

  ngOnInit() { this.carregarTarefas(); }

  carregarTarefas() {
    this.tarefasService.listar().subscribe(dados => {
      this.tarefas = dados;
      this.cdr.detectChanges();
    });
  }
  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefasService.adicionar(this.novaTarefa).subscribe(() => {
        this.novaTarefa = '';
        this.carregarTarefas();
      });
    }
  }
  toggleConcluida(tarefa: Tarefa) {
    this.tarefasService.alternarConcluida(tarefa.id).subscribe(() => this.carregarTarefas());
  }
  removerTarefa(id: number) {
    this.tarefasService.remover(id).subscribe(() => this.carregarTarefas());
  }
}