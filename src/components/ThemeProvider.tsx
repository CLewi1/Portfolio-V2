'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
} | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        try {
            const storedTheme = localStorage.getItem('theme') as Theme | null;
            if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
                setTheme(storedTheme);
            }
        } catch (error) {
            console.error('Unable to access localStorage', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.error('Unable to save to localStorage', error);
        }

        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const value = { theme, setTheme };

    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
  }

  export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  }