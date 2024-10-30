import MobileSidebar from "./mobile"
import DesktopSidebar from "./desktop"
import { PropsWithChildren } from "react"

export default function Sidebar({ children }: PropsWithChildren<{}>) {
    return (
        <div className="flex flex-col sm:flex-row text-primary-reverse bg-primary-gradient">
            <div className="block sm:hidden">
                <MobileSidebar />
            </div>
            <div className="hidden sm:block">
                <DesktopSidebar />
            </div>
            <div className="p-4 w-full">
                {children}
            </div>
        </div>
    )
}
