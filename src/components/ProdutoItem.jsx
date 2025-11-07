// import React from 'react'
import React, { useState } from "react";


function ProdutoItem({ produto }) {
  const [mostrar, setmostrar] = useState(false);
  function alterarMensagem() {
        setmostrar(!mostrar);
  }

  return (
    <div className="produto-card">
      <img src={produto.imagem} alt={produto.nome} />
      <center><button onClick={alterarMensagem}>{mostrar ? "Fechar Descrição":"Ver Descrição"}</button></center>
      {mostrar && <h3>{produto.nome}</h3>}
      {mostrar && <p>Preço: {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>}
    </div>
  );
}

export default ProdutoItem;