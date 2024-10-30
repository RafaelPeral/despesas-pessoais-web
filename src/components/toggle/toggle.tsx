import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/hooks/themecontext";

export default function Toggle() {
    const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? 'light' : 'dark'}
        </button>
    )
}