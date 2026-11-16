import { Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
@Service()
export class AlunoService {
    private url = environment.apiUrl;
}
