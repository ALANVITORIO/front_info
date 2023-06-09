import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export async function getProdutos() {
  try {
    const response = await axios.get(`${API_URL}/produtos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos', error);
    throw error;
  }
}

export async function getProduto(id) {
  try {
    const response = await axios.get(`${API_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar produto com id ${id}`, error);
    throw error;
  }
}

export async function createProduto(produto) {
  try {
    const response = await axios.put(`${API_URL}/produtos`, produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto', error);
    throw error;
  }
}

export async function updateProduto(id, produto) {
  try {
    const response = await axios.put(`${API_URL}/produtos/${id}`, produto);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar produto com id ${id}`, error);
    throw error;
  }
}

export async function deleteProduto(id) {
  try {
    const response = await axios.delete(`${API_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar produto com id ${id}`, error);
    throw error;
  }
}
