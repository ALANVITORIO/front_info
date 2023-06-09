import React, { useState, useEffect } from 'react';
import { getProduto, updateProduto } from '../ApiRest';
import '../App.css';

const UpdateProduto = ({ produtoId }) => {
  const [produto, setProduto] = useState({
    id: '',
    nome: '',
    quantidade: '',
    valor: '',
    observacao: '',
  });

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const fetchedProduto = await getProduto(produtoId);
        setProduto(fetchedProduto);
      } catch (error) {
        console.error('Erro ao buscar produto', error);
      }
    };
    fetchProduto();
  }, [produtoId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedProduto = await updateProduto(produtoId, produto);
      setProduto(updatedProduto);
      alert('Produto atualizado com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar o produto, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Atualizar Produto</button>
    </form>
  );
};

export default UpdateProduto;
