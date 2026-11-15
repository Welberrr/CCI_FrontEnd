export interface Aluno {
  id?: string;
  nome: string;
  dataNascimento: string;
  cpf: string;
  endereco: Endereco;
  ativo?: boolean;
}

export interface Endereco {
  cidade: string;
  estado: string;
  pais: string;
}
