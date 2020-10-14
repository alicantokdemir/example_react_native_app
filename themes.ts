export type ThemeOptions = 'light' | 'dark';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    danger: string;
  };
  text: {
    fontSize: number;
    fontFamily: string;
  };
  button?: {
    container: {
      backgroundColor: string;
    },
    text: {
      color: string;
    }
  }
}

const commonStyles = {
  colors: {
    danger: 'red'
  },
  text: {
    fontSize: 16,
  },
  button: {
    container: {
      height: 50,
      width: 200,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 14
    }
  }
};

const THEMES: { [K in ThemeOptions]: Theme } = { light: Object.create(null), dark: Object.create(null) };

THEMES.light.colors = {
  ...commonStyles.colors,
  primary: 'green',
  secondary: 'yellow',
};

THEMES.light.text = {
  ...commonStyles.text,
  fontFamily: 'Arial',
};

THEMES.light.button = {
  container: {
    ...commonStyles.button.container,
    backgroundColor: THEMES.light.colors.primary,
  },
  text: {
    ...commonStyles.button.text,
    color: THEMES.light.colors.secondary,
  }
};

THEMES.dark.colors = {
  ...commonStyles.colors,
  primary: 'black',
  secondary: 'white',
};

THEMES.dark.text = {
  ...commonStyles.text,
  fontFamily: 'Arial Rounded MT Bold',
};

THEMES.dark.button = {
  container: {
    ...commonStyles.button.container,
    backgroundColor: THEMES.dark.colors.primary,
  },
  text: {
    ...commonStyles.button.text,
    color: THEMES.dark.colors.secondary,
  }
};

export default THEMES;
