import { useItem } from "@/hooks/app"

export default function MobileSidebar() {
    const { item, addItem, deleteItem } = useItem()
    
    return (
        <div className="w-full h-16 bg-red-400">
            <button onClick={() => addItem("Novo item")}>Adicionar</button>
        </div>
    )
}