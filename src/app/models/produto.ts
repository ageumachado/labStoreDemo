export interface Produto {
  id?: string;
  nome: string;
  descricao: string | null;
  imagemUrl: string | null;
  tempoPreparo?: number;
  preco: number;
  ordem: number;
  ehPausado: boolean;
  ativo: boolean;
  estoque?: number;
}
