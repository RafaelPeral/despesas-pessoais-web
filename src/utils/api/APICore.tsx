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

export const getAPIDespesa = async () => {
    try {
        const response = await fetch(`${BASE_PATH}/despesa`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getAPIReceita = async () => {
    try {
        const response = await fetch(`${BASE_PATH}/receita`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const addAPIReceita = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/add_receita`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const addAPIDespesa = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/add_despesa`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const addAPIFormaPagamento = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/add_forma_pagamento`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const addAPICategoriaReceita = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/add_categoria_receita`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const addAPICategoriaDespesa = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/add_categoria_despesa`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}