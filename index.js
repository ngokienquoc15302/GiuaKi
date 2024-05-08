import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#67C6E3',
        surfaceVariant: 'rgba(103, 198, 227, 0.3)',
    },
};

export default function Main() {
    return (
            <PaperProvider theme={theme}>
                <App />
            </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
