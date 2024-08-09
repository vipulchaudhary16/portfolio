import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
	collapsible: boolean;
	setCollapsible: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [collapsible, setCollapsible] = useState<boolean>(false);

	return (
		<ThemeContext.Provider value={{ collapsible, setCollapsible }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('Please provide a provider');
	}
	return context;
};

export { ThemeProvider, useTheme };
