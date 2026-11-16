import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno';

@Injectable({
    providedIn: 'root'
})
export class AlunoService {
    private url = environment.apiUrl;
    private urlBase = `${environment.apiUrl}/alunos`

    constructor(private http: HttpClient) { }

    listarAtivos(){
        return this.http.get<Aluno[]>(`${this.url}/alunos/ativos`);
    }

    cadastrar(aluno: Aluno){
        return this.http.post(this.urlBase, aluno);
    }
}
