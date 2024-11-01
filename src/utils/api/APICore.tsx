const BASE_PATH = "http://127.0.0.1:5000";

export const getAPIFormaPagamento = async () => {
    try {
        const response = await fetch(`${BASE_PATH}/forma_pagamento`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getAPICategoriaReceita = async () => {
    try {
        const response = await fetch(`${BASE_PATH}/categoria_receita`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getAPICategoriaDespesa = async () => {
    try {
        const response = await fetch(`${BASE_PATH}/categoria_despesa`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}