import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/hooks/themecontext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Toggle() {
    const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
    return (
        <div className="flex items-center gap-2">
            <Switch id="dark-theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} defaultChecked={true}/>
            <Label htmlFor="dark-theme">Dark Theme</Label>
        </div>
    )
}