import React, { useState } from 'react';
import { deleteProduto } from '../ApiRest';
import '../App.css';
const ProdutoDelete = () => {
  const [id, setId] = useState('');

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await deleteProduto(id); // Utilizando a função deleteProduto
      alert('Produto deletado com sucesso!');
    } catch (error) {
      alert('Erro ao deletar o produto, tente novamente.');
    }
  };

  return (
    <section>
      <h2>Deletar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID do produto para deletar:
          <input
            type="number"
            value={id}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Deletar Produto</button>
      </form>
    </section>
  );
};

export default ProdutoDelete;
