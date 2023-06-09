import React from 'react';
import './App.css';
import ProdutoView from './components/ProdutoView';
import ProdutoDelete from './components/ProdutoDelete';
import ProdutoAdd from './components/ProdutoAdd';
import UpdateProduto from './components/UpDateProdut';

function App() {
  return (
    <div>
      <p>My mind forever</p>
      <ProdutoView />
      <ProdutoDelete />
      <ProdutoAdd />
      <UpdateProduto />
    </div>
  );
}

export default App;
