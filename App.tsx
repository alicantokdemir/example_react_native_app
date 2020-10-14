/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import AppButton from './components/AppButton';
import { LangConsumer, LangProvider } from './contexts/langContext';
import { ThemeConsumer, ThemeProvider } from './contexts/themeContext';
import THEMES from './themes';
import { TRANSLATIONS } from './translations';

const App = () => {
  return (
    <LangProvider>
      <ThemeProvider>
        <View style={styles.container}>

          <LangConsumer>
            {
              ({ lang, setLang }) => (
                <ThemeConsumer>
                  {
                    ({ theme, setTheme }) => (
                      <>
                        <AppButton
                          theme={theme}
                          onPress={() => setLang(lang === 'en-us' ? 'pt-br' : 'en-us')}
                          title={TRANSLATIONS[lang]["Switch language"]}
                        />
                        <AppButton
                          theme={theme}
                          onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                          title={TRANSLATIONS[lang]["Switch theme"]}
                        />

                        <Text style={THEMES[theme].text}>
                          {TRANSLATIONS[lang]['Current theme']}: {theme}
                        </Text>

                        <Text style={THEMES[theme].text}>
                          {TRANSLATIONS[lang]['Current language']}: {lang}
                        </Text>
                      </>
                    )
                  }
                </ThemeConsumer>
              )
            }
          </LangConsumer>
        </View>
      </ThemeProvider>
    </LangProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
