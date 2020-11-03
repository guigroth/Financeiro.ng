import { AbstractService } from '../services/abstract.service';
import { AbstractEntity } from './abstractentity';
import { Categoria } from './categoria';

export class Conta extends AbstractEntity {
    public descricao:String;
    public categoria:Categoria;
    public dataVencimento:Date;
    public dataPagamento:Date;
    public valor:number;

}

