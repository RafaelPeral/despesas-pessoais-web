// src/components/my_sidebar/MySidebar.tsx
import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { useMySidebar } from "@/hooks/my_sidebar/my_sidebar_use_my_sidebar";
import MySidebarContent from "@/components/my_sidebar/my_sidebar_content";
import MySidebarFooter from "@/components/my_sidebar/my_sidebar_footer";
import Toggle from "../toggle/toggle";
import MobileSidebar from "./mobile";

export default function MySidebar() {
    const { open, setOpen } = useMySidebar();
    const userName = "Rafael Peral"; 
    const userInitials = userName.split(' ').map(name => name.charAt(0)).join('');

    return (
        <SidebarProvider open={open} onOpenChange={setOpen}>
            <Sidebar collapsible="icon">
                <SidebarHeader className="flex flex-row items-center justify-between p-4">
                    <SidebarTrigger />
                    {open && <Toggle />}
                </SidebarHeader>
                <MySidebarContent />
                <MySidebarFooter userName={userName} userInitials={userInitials} isOpen={open} />
            </Sidebar>
            <div className="flex justify-between items-center md:hidden h-min">
                {!open && <SidebarTrigger />}
                <MobileSidebar />
            </div>
        </SidebarProvider>
    );
}
