import Add from "./add"
import CardGeralPieChart from "@/components/cards/geral/card_geral_pie_chart"

export default function Geral() {
    return (
        <div>
            <Add add={<CardGeralPieChart/>}>
                Adicionar Pie Chart Geral
            </Add>
        </div>
    )
}