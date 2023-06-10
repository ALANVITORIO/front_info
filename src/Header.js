import React from 'react';
import imgSrc from './img/jim_rohn.bmp'; // Importe a imagem

const Header = () => {
  return (
    <div>
      <header>Balanço Patrimonial</header>
      <h2>Primeiro passo para arrumar a sua vida financeira em 90 dias</h2>
      <p>
        O balanço patrimonial é uma demonstração contábil que tem, por
        finalidade, apresentar a posição financeira e patrimonial da pessoa em
        determinada data. Jim Rohn em seu livro, cita que o primeiro passo para
        arrumar a sua vida financeira é fazer um balanço de tudo que tem
        financeiramente e então depois colocar tudo que tem de dívida, e então
        subtrair para saber seu patrimônio real
        <p>
          Ele é composto por três grupos de contas: ativo, passivo e patrimônio
          líquido.
        </p>
      </p>
      <img src={imgSrc} alt="Jim Rohn" /> {/* Adicione a imagem */}
      <p>
        O plano financeiro de 90 dias de Jim Rohn, também conhecido como "90
        Dias para a Maestria Financeira", tem como objetivo ajudar as pessoas a
        se tornarem financeiramente independentes através do domínio da gestão
        do dinheiro. Isso envolve criar uma filosofia para dominar seu dinheiro,
        estabelecer um orçamento, estar consciente sobre as dívidas e como
        eliminá-las, e ter um plano para criar riqueza a longo prazo
      </p>
      <p>
        O primeiro passo é o conhecimento, ou seja, fazer um um inventário da
        sua vida. Com ele, você sabera onde está e qual é o seu destino desejado
      </p>
    </div>
  );
};

export default Header;
