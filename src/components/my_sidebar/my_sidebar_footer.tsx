import { SidebarFooter } from "@/components/ui/sidebar";
import { MySidebarFooterProps } from "@/types/my_sidebar/my_sidebar_footer_props";

export default function MySidebarFooter({ userName, userInitials, isOpen }: MySidebarFooterProps) {
    return (
        <SidebarFooter className="flex flex-col items-center p-4 border-t bg-purple-600 rounded-t-lg cursor-pointer transition-colors duration-300 hover:bg-purple-700">
            <a 
                href="https://github.com/RafaelPeral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
            >
                {isOpen ? (
                    <img 
                        src="https://avatars.githubusercontent.com/u/168774687?v=4" 
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mb-2"
                    />
                ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-white font-semibold">
                        {userInitials}
                    </div>
                )}
                {isOpen && (
                    <span className="text-sm text-white font-semibold">{userName}</span>
                )}
            </a>
        </SidebarFooter>
    );
}
