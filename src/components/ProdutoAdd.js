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
      <h2>Preenchendo a tabela com seu patrimônio</h2>
      <p>
        Nessa seção você irá adicionar tudo que tem de patrimônio. Não é
        necessário ser super-preciso. Dê uma estimativa de quanto vale cada
        coisa
      </p>
      <p>Por exemplo, nome: Carro</p>
      <p>Quantidade : 2</p>
      <p>
        Valor 1200 reais cada, então, coloque 2400, ou o quanto você acha que
        vale somando os dois
      </p>
      <p>Observação: carro com dez anos</p>
      <h2>Adicionar item patrimonial</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nome do bem:
          <input
            type="text"
            name="nome"
            placeholder="Carro" // adicionando placeholder
            value={produto.nome}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantidade que possui:
          <input
            type="number"
            name="quantidade"
            placeholder="1" // adicionando placeholder
            value={produto.quantidade}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Valor total(estimativa):
          <input
            type="number"
            step="0.01"
            name="valor"
            placeholder="20000" // adicionando placeholder
            value={produto.valor}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Observação:
          <textarea
            name="observacao"
            placeholder="Carro usado" // adicionando placeholder
            value={produto.observacao}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Adicionar item</button>
      </form>
    </section>
  );
};

export default ProdutoAdd;
