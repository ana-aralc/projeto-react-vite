import React, { useState } from 'react'
import ProdutoLista from './components/ProdutoLista'
import "./App.css";


function App() {
  const produtos = [
    {
      id: 1,
      nome: "Bicicleta Retrô Vintage Aro 26 Cesta",
      preco: 1050.00,
      imagem: "https://images.tcdn.com.br/img/img_prod/1066313/bicicleta_retro_vintage_aro_26_cesta_feminina_vermelho_2655_1_7f435e225e03454219411c9897b9a0f7.jpeg"
    },
    {
      id: 2,
      nome: "Urso gigante de pelúcia macio",
      preco: 581.10,
      imagem: "https://imgs.casasbahia.com.br/1561868168/1xg.jpg?imwidth=500"
    },
    {
      id: 3,
      nome: "Bombom Sonho de Valsa 1kg LACTA",
      preco: 62.99,
      imagem: "https://lojasantoantonio.vtexassets.com/arquivos/ids/218789/88-Bombom-Sonho-de-Valsa-1kg-MONDELEZ-2.jpg?v=638318668802330000"
    },
    {
      id: 4,
      nome: "Xícara de chá",
      preco: 169.90,
      imagem: "https://cdn.awsli.com.br/2500x2500/1216/1216170/produto/159979089/42c3f86d8b.jpg"
    }
  ]

  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const handleSelecionar = (produto) => {
    setProdutoSelecionado(produto)
  }

  return (
    <div className="container">
      <h1>ִֶCatálogo de Produtos࿔</h1>

      <ProdutoLista produtos={produtos} onSelecionar={handleSelecionar} />

    </div>
  )
}

export default App;

