import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { Conta } from '../models/conta';


@Injectable()
export class ContaService extends AbstractService {
    
    constructor(protected http:HttpClient) {
        super(http);
    }
    public getPath() {
        return "conta";
    }
    public salvar(conta:Conta):Observable<Conta> {
        return this.http.post<Conta>(this.getUrl('salvar'),conta);
    
    } 
    public pesquisar(descricao):Observable<Array<Conta>>{
        return this.http.post<Array<Conta>>(this.getUrl('descricao'), descricao);
    }
    public buscarPorID(id):Observable<Conta>{
        return this.http.get<Conta>(this.getUrl(`/${id}`));
}
    public excluir(id):Observable<any>{
        return this.http.delete(this.getUrl(`/${id}`));
}
}