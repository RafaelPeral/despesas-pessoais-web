import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { useMySidebar } from "@/hooks/my_sidebar/my_sidebar_use_my_sidebar";
import MySidebarContent from "@/components/my_sidebar/my_sidebar_content";
import MySidebarFooter from "@/components/my_sidebar/my_sidebar_footer";
import Toggle from "../toggle/toggle";
import MobileSidebar from "./mobile";

export default function MySidebar() {
    const { open, setOpen } = useMySidebar();

    return (
        <SidebarProvider open={open} onOpenChange={setOpen}>
            <Sidebar collapsible="icon">
                <SidebarHeader className="flex flex-row items-center justify-between p-4">
                    <SidebarTrigger />
                    {open && <Toggle />}
                </SidebarHeader>
                <MySidebarContent />
                <MySidebarFooter 
                    userName="Rafael Peral"
                    src_avatar="https://avatars.githubusercontent.com/u/168774687?v=4"
                    github="https://github.com/RafaelPeral" 
                    email="rafaelperal@gmail.com" 
                    linkedin="https://www.linkedin.com/in/rafael-peral-83438a278" 
                    instagram="https://www.instagram.com/rafaelvenet/" 
                    telegram="https://t.me/RafaelPeral" 
                    open={open}
                />
            </Sidebar>
            <div className="flex justify-between items-center md:hidden h-min">
                {!open && <SidebarTrigger />}
                <MobileSidebar />
            </div>
        </SidebarProvider>
    );
}
