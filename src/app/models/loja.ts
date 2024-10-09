export interface Loja {
  id: number;
  endpoint: string;
  nome: string;
  descricao: string;
  ativo: true;
  aberta: boolean;
  sequencialPedido: number;
  portalPedidoAberto: boolean;
  observacao: string;
}
