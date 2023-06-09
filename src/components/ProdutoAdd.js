import React, { useState } from 'react';
import { createProduto } from '../ApiRest';
import '../App.css';
const ProdutoAdd = () => {
  const [nome, setNome] = useState('');

  const handleInputChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createProduto({ nome }); // Utilizando a função createProduto
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
          Nome do produto:
          <input
            type="text"
            value={nome}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Criar Produto</button>
      </form>
    </section>
  );
};

export default ProdutoAdd;
