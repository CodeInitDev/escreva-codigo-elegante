import { cobrar } from './pagamento.js'

async function main() {
  await cobrar({
    valor: 10,
    tipoPagamento: 'DEBITO',
    cliente: {
      nome: 'Joao da Silva',
      email: 'joao@mail.com'
    }
  })
}

main()