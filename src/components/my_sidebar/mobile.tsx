import Toggle from "../toggle/toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {Button} from "../ui/button"
import { PanelBottom } from "lucide-react"
import MySidebarContent from "./my_sidebar_content"
import	MySidebarFooter from "./my_sidebar_footer"
import { SidebarHeader, SidebarTrigger, SidebarProvider, Sidebar } from "../ui/sidebar"
import { useMySidebar } from "@/hooks/my_sidebar/my_sidebar_use_my_sidebar"

export default function MobileSidebar() {
    const { open, setOpen } = useMySidebar();

    return (
        <div className="w-full h-16 fixed items-center top-0 flex justify-between px-4">
            <Sheet open={window.innerWidth < 768 && open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <PanelBottom/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[--sidebar-width] bg-sidebar text-sidebar-foreground">
                    <SidebarProvider open={open} onOpenChange={setOpen}>
                        <Sidebar collapsible="icon">
                            <SidebarHeader className="flex flex-row items-center justify-between p-4">
                                <SidebarTrigger />
                            </SidebarHeader>
                        </Sidebar>
                        <div className="flex flex-col mb-6">
                           {open && <Toggle />}
                            <MySidebarContent setOpen={setOpen}/>
                            <MySidebarFooter 
                                userName="Rafael Peral"
                                src_avatar="https://avatars.githubusercontent.com/u/168774687?v=4"
                                github="https://github.com/RafaelPeral" 
                                email="rafaelvenet@gmail.com" 
                                linkedin="https://www.linkedin.com/in/rafael-peral-83438a278" 
                                instagram="https://www.instagram.com/rafaelvenet/" 
                                telegram="https://t.me/RafaelPeral" 
                                open={open}
                            /> 
                        </div>
                    </SidebarProvider>
                </SheetContent>
            </Sheet>
            <Toggle/>
        </div>
    )
}