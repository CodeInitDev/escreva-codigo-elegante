import * as gateway from './gateway.js'

const meiosDePagamentos = new Map()
meiosDePagamentos.set('PIX', gateway.cobrarViaPix)
meiosDePagamentos.set('CARTAO_CREDITO', gateway.cobrarViaCartaoCredito)
meiosDePagamentos.set('DEBITO', gateway.cobrarViaDebito)

export async function cobrar(pedido) {
  const { valor, tipoPagamento, cliente } = pedido

  const funcPagamento = meiosDePagamentos.get(tipoPagamento)

  await funcPagamento?.({ valor, cliente })
}