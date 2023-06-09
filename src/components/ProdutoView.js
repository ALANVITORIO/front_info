import React from 'react';
import '../App.css';
import useFetch from './UseFetch';
import styles from './produtoView.module.css'; // Importar os estilos do CSS module

const ProdutoView = () => {
  const {
    data: produtos,
    loading,
    error,
  } = useFetch('http://localhost:8080/api/produtos');

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar...</p>;

  return (
    <section>
      <div>
        <h2 className={styles.titulo}>Produtos cadastrados</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>ID</th>{' '}
              {/* Adicionei uma coluna para ID */}
              <th className={styles.th}>Nome do livro</th>
              <th className={styles.th}>Quantidade de copias no estoque</th>
              <th className={styles.th}>Valor</th>
              <th className={styles.th}>Observação</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td className={styles.td}>{produto.id}</td>{' '}
                {/* Adicionei o ID aqui */}
                <td className={styles.td}>{produto.nome}</td>
                <td className={styles.td}>{produto.quantidade}</td>
                <td className={styles.td}>{produto.valor}</td>
                <td className={styles.td}>{produto.observacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProdutoView;
