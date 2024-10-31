import { SidebarFooter } from "@/components/ui/sidebar";
import { MySidebarFooterProps } from "@/types/my_sidebar/my_sidebar_footer_props";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { 
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger, 
} from "@/components/ui/dropdown-menu";

import { 
    SidebarMenu, 
    SidebarMenuItem, 
    SidebarMenuButton 
} from "@/components/ui/sidebar";

import { Github, Instagram, Mail, MessageCircle, ChevronsUpDown, Linkedin } from "lucide-react"

export default function MySidebarFooter({ userName, src_avatar, github, email, linkedin, instagram, telegram, open }: MySidebarFooterProps) {
    const userInitials = userName.split(' ').map(name => name.charAt(0)).join('');
    return (
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={src_avatar}
                      alt={userName + " avatar"}
                      className="rounded-full"
                    />
                    <AvatarFallback className="rounded-lg text-lg">{userInitials}</AvatarFallback>
                  </Avatar>
                  {open && 
                      <div className="flex items-center justify-between w-full">
                          <div className="grid flex-1 text-left text-sm leading-tight">
                              <span className="truncate font-semibold">
                                  {userName}
                              </span>
                              <span className="truncate text-xs">
                                  {email}
                              </span>
                          </div>
                          <ChevronsUpDown className="ml-auto size-4" />
                      </div>
                  }
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <a href={github} target="_blank">
                    <DropdownMenuItem>
                        <Github />
                        <p>My Github</p>
                        <span></span>
                    </DropdownMenuItem>
                </a>
                <DropdownMenuSeparator/>
                <a href={"mailto:" + email} target="_blank">
                    <DropdownMenuItem>
                        <Mail />
                        <p>My Email</p>
                    </DropdownMenuItem>
                </a>
                <DropdownMenuSeparator/>
                <a href={linkedin} target="_blank">
                    <DropdownMenuItem>
                        <Linkedin />
                        <p>My Linkedin</p>
                    </DropdownMenuItem>
                </a>
                <DropdownMenuSeparator/>
                <a href={instagram} target="_blank">
                    <DropdownMenuItem>
                        <Instagram />
                        <p>My Instagram</p>
                    </DropdownMenuItem>
                </a>
                <DropdownMenuSeparator/>
                <a href={telegram} target="_blank">
                    <DropdownMenuItem>
                        <MessageCircle />
                        <p>My Telegram</p>
                    </DropdownMenuItem>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    );
}
