import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { navMain } from "@/components/my_sidebar/nav_main";
import { ChevronRight } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export default function MySidebarContent( {setOpen}: any) {
    return (
        <SidebarGroup className="h-full">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu className='h-full max-h-[calc(100vh-180px)] overflow-auto'>
                {navMain.map((item) => (
                    <Collapsible key={item.title} defaultOpen={item.isActive}>
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    <ChevronRight className="ml-auto" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub onClick={() => setOpen(false)}>
                                    {item.items && item.items}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                        <Separator className="my-2 border"/>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}


