import { CreditCard, Folder, Plus, Trash2, ChevronRight } from "lucide-react";
import { NavItem } from "@/types/my_sidebar/my_sidebar_nav_item";

export const navMain: NavItem[] = [
    { 
        title: "Geral", 
        icon: <Folder size={20} />, 
        isActive: true, 
        items: <p>teste</p>
    },
    { 
        title: "Receitas", 
        icon: <Plus size={20} />, 
        items: <p>teste</p>
    },
    { 
        title: "Despesas", 
        icon: <Trash2 size={20} />, 
        items: <p>teste</p>
    },
    { 
        title: "Categorias de Receitas", 
        icon: <ChevronRight size={20} />, 
        items: <p>teste</p>
    },
    { 
        title: "Categorias de Despesas", 
        icon: <ChevronRight size={20} />, 
        items: <p>teste</p>
    },
    { 
        title: "Formas de Pagamento", 
        icon: <CreditCard size={20} />, 
        items: <p>teste</p>
    },
];

