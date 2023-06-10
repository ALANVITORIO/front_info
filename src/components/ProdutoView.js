import React from 'react';
import '../App.css';
import useFetch from './UseFetch';
import styles from './produtoView.module.css'; // Importar os estilos do CSS module

const ProdutoView = ({ setProdutoId }) => {
  // <-- Recebe setProdutoId como prop
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
        <h2 className={styles.titulo}>Itens que você adicionou</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>ID</th>{' '}
              <th className={styles.th}>Nome do item</th>
              <th className={styles.th}>Quantidade</th>
              <th className={styles.th}>Valor</th>
              <th className={styles.th}>Observação</th>
              <th className={styles.th}>Editar item</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td className={styles.td}>{produto.id}</td>{' '}
                <td className={styles.td}>{produto.nome}</td>
                <td className={styles.td}>{produto.quantidade}</td>
                <td className={styles.td}>
                  R${' '}
                  {produto.valor.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className={styles.td}>{produto.observacao}</td>
                <td className={styles.td}>
                  <button onClick={() => setProdutoId(produto.id)}>
                    Clique aqui para editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProdutoView;
