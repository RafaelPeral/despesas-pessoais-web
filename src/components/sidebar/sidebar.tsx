import { useState } from "react"
import Toggle from "../toggle/toggle"
import MobileSidebar from "./mobile"
import { 
    SidebarProvider, 
    Sidebar, 
    SidebarContent, 
    SidebarGroup, 
    SidebarHeader, 
    SidebarTrigger, 
    SidebarGroupLabel, 
    SidebarGroupContent, 
    SidebarMenu, 
    SidebarMenuItem, 
    SidebarFooter, 
    SidebarMenuButton ,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import {
    AudioWaveform,
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    ChevronRight,
    ChevronsUpDown,
    Command,
    CreditCard,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    LogOut,
    Map,
    MoreHorizontal,
    PieChart,
    Plus,
    Settings2,
    Sparkles,
    SquareTerminal,
    Trash2,
  } from "lucide-react"


  const navMain = [
    { 
        title: "Geral", 
        icon: <Folder size={20} />, 
        isActive: true, 
        items: [
            {
                title: "Dashboard",
            }
        ] 
    },
    { 
        title: "Receitas", 
        icon: <Plus size={20} />, 
        items: [
            {
                title: "Dashboard",
            }
        ]  
    },
    { 
        title: "Despesas", 
        icon: <Trash2 size={20} />, 
        items: [
            {
                title: "Dashboard",
            }
        ]  
    },
    { 
        title: "Categorias de Receitas", 
        icon: <ChevronRight size={20} />, 
        items: [
            {
                title: "Dashboard",
            }
        ]  
    },
    { 
        title: "Categorias de Despesas", 
        icon: <ChevronRight size={20} />, 
        items: [
            {
                title: "Dashboard",
            }
        ] 
    },
    { 
        title: "Formas de Pagamento", 
        icon: <CreditCard size={20} />, 
        items: [
            {
                title: "Dashboard",
            }
        ] 
    },
  ]

export default function MySidebar() {
    const [open, setOpen] = useState(false)

    return (
        <SidebarProvider open={open} onOpenChange={setOpen}>
            <Sidebar collapsible="icon">
                <SidebarHeader className="flex flex-row items-center justify-between p-4">
                    <SidebarTrigger />
                    {open && <Toggle/>}
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                        <SidebarMenu>
                            {navMain.map((item) => (
                                <Collapsible 
                                    key={item.title} 
                                    asChild defaultOpen={item.isActive}
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip={item.title}>
                                                {item.icon && item.icon}
                                                <span>{item.title}</span>
                                                <ChevronRight className="ml-auto"/>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <span>{subItem.title}</span>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                            </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <div className="flex justify-between items-center md:hidden h-min">
                {!open && <SidebarTrigger />}
                <MobileSidebar/>
            </div>
        </SidebarProvider>
    )
}
                    