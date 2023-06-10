import React, { useState } from 'react';
import './App.css';
import ProdutoView from './components/ProdutoView';
import ProdutoDelete from './components/ProdutoDelete';
import ProdutoAdd from './components/ProdutoAdd';
import UpdateProduto from './components/UpDateProdut';

import Footer from './Footer';
import Header from './Header';

function App() {
  const handleRefreshClick = () => {
    window.location.reload();
  };
  const [produtoId, setProdutoId] = useState(null); // Utilizando o estado para armazenar o id do produto que será atualizado

  return (
    <div>
      <Header />
      <ProdutoAdd />
      <button onClick={handleRefreshClick}>Atualizar tabela</button>
      <ProdutoView setProdutoId={setProdutoId} />
      {produtoId && <UpdateProduto produtoId={produtoId} />}
      <button onClick={handleRefreshClick}>Atualizar tabela</button>
      <ProdutoDelete />
      <button onClick={handleRefreshClick}>Atualizar tabela</button>
      <Footer />
    </div>
  );
}

export default App;
