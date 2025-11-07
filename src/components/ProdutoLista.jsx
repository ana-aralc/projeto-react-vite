import React from 'react'
import ProdutoItem from './ProdutoItem'


function ProdutoLista({ produtos,  }) {
  return (
    <div className="lista-produtos">
      {produtos.map(produto => (
        <ProdutoItem
          key={produto.id}
          produto={produto}
        />
      ))}
    </div>
  )
}

export default ProdutoLista;
