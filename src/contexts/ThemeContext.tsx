import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import GlobalStyle from '../styles/global';
import dark from "../styles/themes/dark";

interface MyThemeContextData {
    theme: any;
    toggleTheme: () => void;
}

export const MyThemeContext = createContext({} as MyThemeContextData);

export function MyThemeProvider({children} : any) {
	
  	const [theme, setTheme] = useState(light);
  
    function toggleTheme(){
		setTheme(theme.title === 'light' ? dark : light);
	}

  	return (
		<MyThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={ theme }>
                <GlobalStyle />
                {children}
            </ThemeProvider>
		</MyThemeContext.Provider>
  	);
}