import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';


@Injectable()
export class UsuarioService extends AbstractService {
    
    constructor(protected http:HttpClient) {
        super(http);
    }
    public getPath() {
        return "usuario";
    }
    public salvar(usuario:Usuario):Observable<Usuario> {
        return this.http.post<Usuario>(this.getUrl('salvar'),usuario);
    
    } 
    public pesquisar(nome):Observable<Array<Usuario>>{
        return this.http.post<Array<Usuario>>(this.getUrl('nome'), nome);
    }
    public buscarPorID(id):Observable<Usuario>{
        return this.http.get<Usuario>(this.getUrl(`/${id}`));
}
    public excluir(id):Observable<any>{
        return this.http.delete(this.getUrl(`/${id}`));
}
}