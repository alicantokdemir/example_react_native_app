import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { LangOptions } from "../translations";

const defaultLang = 'pt-br';

const LangContext = createContext<
  {
    lang: LangOptions,
    setLang: Dispatch<SetStateAction<LangOptions>>
  }
>({ lang: defaultLang, setLang: () => { } });

const useLang = () => useContext(LangContext);

const LangProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState<LangOptions>(defaultLang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

const LangConsumer = LangContext.Consumer;

export { useLang, LangProvider, LangConsumer };
