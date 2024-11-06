const BASE_PATH = "https://despesas-pessoais-api.onrender.com";

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
        return error;
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
        return error;
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
        return error;
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
        return error;
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
        return error;
    }
}

export const deleteAPIReceita = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/delete_by_id_receita`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}

export const deleteAPIDespesa = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/delete_by_id_despesa`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}

export const deleteAPIFormaPagamento = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/delete_by_id_forma_pagamento`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();    
        return result;
    } catch (error) {
        return error;
    }
}

export const deleteAPICategoriaReceita = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/delete_by_id_categoria_receita`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}

export const deleteAPICategoriaDespesa = async (data: any) => {
    try {
        const response = await fetch(`${BASE_PATH}/delete_by_id_categoria_despesa`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}