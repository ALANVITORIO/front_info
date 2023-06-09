import React, { useState } from 'react';

const ProdutoForm = () => {
  const [produto, setProduto] = useState({
    id: '',
    nome: '',
    quantidade: '',
    valor: '',
    observacao: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(produto);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="number"
          name="id"
          value={produto.id}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={produto.nome}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Quantidade:
        <input
          type="number"
          name="quantidade"
          value={produto.quantidade}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Valor:
        <input
          type="number"
          step="0.01"
          name="valor"
          value={produto.valor}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Observação:
        <textarea
          name="observacao"
          value={produto.observacao}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProdutoForm;
