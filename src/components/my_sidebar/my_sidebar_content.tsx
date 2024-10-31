import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { navMain } from "@/components/my_sidebar/nav_main";
import { ChevronRight } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export default function MySidebarContent() {
    return (
        <SidebarGroup className="h-full">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu className="h-full max-h-fit overflow-auto ">
                {navMain.map((item) => (
                    <div key={item.title}>
                        <Collapsible asChild defaultOpen={item.isActive}>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                        <ChevronRight className="ml-auto" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items && item.items}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                        <Separator className="my-2 border"/>
                    </div>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
