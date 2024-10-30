import MobileSidebar from "./mobile"
import DesktopSidebar from "./desktop"

export default function Sidebar() {
    return (
        <div>
            <div className="block sm:hidden">
                <MobileSidebar />
            </div>
            <div className="hidden sm:block">
                <DesktopSidebar />
            </div>
        </div>
    )
}
