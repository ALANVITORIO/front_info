import React, { useState } from 'react';
import { createProduto } from '../ApiRest';
import '../App.css';
const ProdutoAdd = () => {
  const [produto, setProduto] = useState({
    nome: '',
    quantidade: '',
    valor: '',
    observacao: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createProduto(produto);
      alert('Produto criado com sucesso!');
    } catch (error) {
      alert('Erro ao criar o produto, tente novamente.');
    }
  };

  return (
    <section>
      <h2>Criar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            name="quantidade"
            value={produto.quantidade}
            onChange={handleInputChange}
            required
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
        <button type="submit">Criar</button>
      </form>
    </section>
  );
};

export default ProdutoAdd;
