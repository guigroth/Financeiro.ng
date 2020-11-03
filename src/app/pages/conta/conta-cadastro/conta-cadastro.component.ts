import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Conta } from 'src/app/models/models';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ContaService } from 'src/app/services/conta.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-conta-cadastro',
  templateUrl: './conta-cadastro.component.html',
  styleUrls: ['./conta-cadastro.component.scss']
})
export class ContaCadastroComponent implements OnInit {

  public form:FormGroup = new FormGroup({
    id: new FormControl(),
    descricao:new FormControl(),
    categoria:new FormControl(),
    valor:new FormControl(),
    dataVencimento:new FormControl(),
    dataPagamento:new FormControl(),
  })
  public conta:Conta;
  public categorias:Categoria[] = [];

  constructor(private router:Router, private route:ActivatedRoute,
        private categoriaService:CategoriaService,
      private contaService:ContaService) { }

  ngOnInit(): void {
    this.getCategorias();
  }
  public getCategorias() {
    this.categoriaService.pesquisar('').subscribe((lista)=>{
      this.categorias = lista;
    })
  }
  public salvar() {
    if (this.form.invalid) {
      alert('Campos brigatórios!');
      return;
    }
    this.conta = this.form.value;
    this.contaService.salvar(this.conta).subscribe((conta)=> {
      this.router.navigate(['conta/pesquisa']);
    })
  }
}
