export interface Loja {
  id: string;
  urlEndpoint: string;
  nome: string;
  descricao: string;
  ativo: true;
  aberta: boolean;
  sequencialPedido: number;
  portalPedidoAberto: boolean;
}
