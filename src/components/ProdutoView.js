import React from 'react';
import useFetch from './UseFetch';

const ProdutoView = () => {
  const {
    data: produtos,
    loading,
    error,
  } = useFetch('http://localhost:8080/api/produtos');

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar...</p>;

  return (
    <div>
      <h2>Produtos cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome do livro</th>
            <th>Quantidade de copias no estoque</th>
            <th>Valor</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => {
            return (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.valor}</td>
                <td>{produto.observacao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProdutoView;
