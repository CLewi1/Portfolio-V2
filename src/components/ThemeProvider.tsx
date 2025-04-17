'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
} | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Set initial state to the system preference
    const [theme, setTheme] = useState<Theme>("system");

    // When the component is rendered, check localStorage for a saved theme
    useEffect(() => {
        try {
            // Check if localStorage is available
            const storedTheme = localStorage.getItem('theme') as Theme | null;
            if (storedTheme) {
                // If a theme is found in localStorage, set it
                setTheme(storedTheme);
            }
        } catch (error) {
            console.error('Unable to access localStorage', error);
        }
    }, []);

    // If the theme changes, update localStorage
    useEffect(() => {
        try {
            // Save the current theme to localStorage
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.error('Unable to save to localStorage', error);
        }
        
        // Apply theme to document element
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [theme]);

    // Listen for changes to the system theme preference and update the theme accordingly
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleChange = () => {
            if (theme === 'system') {
                const root = document.documentElement;
                root.classList.remove('light', 'dark');
                root.classList.add(mediaQuery.matches ? 'dark' : 'light');
            }
        };
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
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