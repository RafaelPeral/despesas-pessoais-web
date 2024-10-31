import { ChevronRight } from "lucide-react";
import { NavItem } from "@/types/my_sidebar/my_sidebar_nav_item";
import Receitas from "./add/receitas";
import Geral from "./add/geral";
import FormaPagamento from "./add/forma_pagamento";
import Despesas from "./add/despesas";
import CategoriaReceita from "./add/categoria_receitas";
import CategoriaDespesa from "./add/categoria_despesas";

export const navMain: NavItem[] = [
    { 
        title: "Geral", 
        icon: <ChevronRight size={20} />, 
        isActive: true, 
        items: <Geral/>
    },
    { 
        title: "Receitas", 
        icon: <ChevronRight size={20} />, 
        items: <Receitas/>
    },
    { 
        title: "Despesas", 
        icon: <ChevronRight size={20} />, 
        items: <Despesas/>
    },
    { 
        title: "Categorias de Receitas", 
        icon: <ChevronRight size={20} />, 
        items: <CategoriaReceita/>
    },
    { 
        title: "Categorias de Despesas", 
        icon: <ChevronRight size={20} />, 
        items: <CategoriaDespesa/>
    },
    { 
        title: "Formas de Pagamento", 
        icon: <ChevronRight size={20} />, 
        items: <FormaPagamento/>
    },
];

