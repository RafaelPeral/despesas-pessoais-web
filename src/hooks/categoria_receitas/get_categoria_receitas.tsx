import { getAPICategoriaReceita } from "@/utils/api/apicore";

export default async function getCategoriaReceitas() {
    return await getAPICategoriaReceita()
}