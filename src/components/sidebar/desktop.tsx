import { useItem } from "@/hooks/app"

export default function DesktopSidebar() {
    const { item, addItem, deleteItem } = useItem()

    return (
        <div className="w-16 min-h-screen h-full bg-red-400">
            <button onClick={() => addItem("Novo item")}>Adicionar</button>
        </div>
    )
}