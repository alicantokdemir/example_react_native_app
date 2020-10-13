import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
type ThemeOptions = 'light' | 'dark';

const defaultTheme = 'light';

const ThemeContext = createContext<
  {
    theme: ThemeOptions,
    setTheme: Dispatch<SetStateAction<ThemeOptions>>
  }
>({ theme: defaultTheme, setTheme: () => { } });

const useLang = useContext(ThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOptions>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer = ThemeContext.Consumer;

export { useLang, ThemeProvider, ThemeConsumer };
