export async function cobrarViaPix(cobranca) {
  // Integracao com gateway de pagamento A
  console.log(`Efetuando cobranca via PIX `, cobranca)
}

export async function cobrarViaCartaoCredito(cobranca) {
  // Integracao com gateway de pagamento B
  console.log(`Efetuando cobranca via Cartao de Credito `, cobranca)
}

export async function cobrarViaDebito(cobranca) {
  // Integracao com gateway de pagamento C
  console.log(`Efetuando cobranca via Debito `, cobranca)
}