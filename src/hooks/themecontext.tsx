import { createContext, useState, useEffect } from 'react' 

const getInitialTheme = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (storedPrefs) {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }
    return 'light';
};

export type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ initialTheme, children }: { initialTheme?: string, children: React.ReactNode }) => {
    const [theme, setTheme] = useState(initialTheme || getInitialTheme)

    const rawSetTheme = (rawTheme: string) => {
        const root = window.document.documentElement
        const isDark = rawTheme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(rawTheme)

        localStorage.setItem('color-theme', rawTheme)
    }

    useEffect(() => {
        if (initialTheme) {
            rawSetTheme(initialTheme)
        }
    }, [initialTheme])

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}