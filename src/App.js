import React from 'react';
import './App.css';
import ProdutoView from './components/ProdutoView';
import ProdutoDelete from './components/ProdutoDelete';
import ProdutoAdd from './components/ProdutoAdd';
import UpdateProduto from './components/UpDateProdut';

import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <ProdutoAdd />
      <ProdutoView />
      <ProdutoDelete />
      <UpdateProduto />
      <Footer />
    </div>
  );
}

export default App;
