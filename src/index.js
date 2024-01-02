import { cobrar } from './pagamento2.js'

async function main() {
  await cobrar({
    valor: 10,
    tipoPagamento: 'PIX',
    cliente: {
      nome: 'Joao da Silva',
      email: 'joao@mail.com'
    }
  })
}

main()