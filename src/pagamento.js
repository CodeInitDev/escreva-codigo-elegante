import * as gateway from './gateway.js'

export async function cobrar(pedido) {
  // ... validacoes

  const { valor, tipoPagamento, cliente } = pedido

  if (tipoPagamento === 'PIX') {
    gateway.cobrarViaPix({ valor, cliente })
  } else if (tipoPagamento === 'CARTAO_CREDITO') {
    gateway.cobrarViaCartaoCredito({ valor, cliente })
  } else if (tipoPagamento === 'DEBITO') {
    gateway.cobrarViaDebito({ valor, cliente })
  } else {
    throw new Error('Tipo de pagamento nao selecionado')
  }
}