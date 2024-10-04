export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  ativo: boolean;
  esgotado: boolean;
  pausado: boolean;
  quantidadeEstoque: number;
}
