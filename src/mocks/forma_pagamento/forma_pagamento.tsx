export default function formapagamento() {
    return {
        "success": 200,
        "data": {
            "cont": 3,
            "data": [
                {
                    "id": 1,
                    "nome": "Dinheiro",
                    "receita": 100,
                    "despesa": 0,
                    "total": 100
                },
                {
                    "id": 2,
                    "nome": "Cartão de Credito",
                    "receita": 200,
                    "despesa": 100,
                    "total": 100
                },
                {
                    "id": 3,
                    "nome": "Cartão de Debito",
                    "receita": 50,
                    "despesa": 20,
                    "total": 30
                }
            ]
        }
    }
}